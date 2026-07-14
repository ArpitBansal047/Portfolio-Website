import * as THREE from "three";
import {
  useRef,
  useMemo,
  createElement,
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Html } from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  RapierRigidBody,
} from "@react-three/rapier";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiPython,
  SiNodedotjs,
  SiTypescript,
  SiOpenjdk,
  SiFirebase,
  SiGooglegemini,
  SiJenkins,
  SiDocker,
  SiNextdotjs,
  SiKubernetes,
  SiPostgresql,
  SiRedis,
  SiMysql,
  SiCplusplus,
  SiGit,
  SiLinux,
  SiTailwindcss,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { TbApi, TbDatabase } from "react-icons/tb";
import { BsDiagram3Fill } from "react-icons/bs";
import SectionTitle from "./SectionTitle";
import { TECH_STACK } from "../data/techStackData";
import { useTheme } from "../context/ThemeProvider";
import "./styles/SectionTitle.css";

const TECH_ICONS: Record<string, IconType> = {
  React: SiReact,
  TypeScript: SiTypescript,
  Python: SiPython,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  Java: SiOpenjdk,
  AWS: FaAws,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Jenkins: SiJenkins,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Oracle: TbDatabase,
  Redis: SiRedis,
  Firebase: SiFirebase,
  Git: SiGit,
  "C++": SiCplusplus,
  SQL: TbDatabase,
  Linux: SiLinux,
  Tailwind: SiTailwindcss,
  GenAI: SiGooglegemini,
  Microservices: BsDiagram3Fill,
  "REST APIs": TbApi,
  "System Design": BsDiagram3Fill,
  Selenium: TbApi,
};

type TechEntry = {
  label: string;
  color: string;
  Icon: IconType;
};

const TECH_STACK_ENTRIES: TechEntry[] = TECH_STACK.map((tech) => ({
  label: tech.label,
  color: tech.color,
  Icon: TECH_ICONS[tech.label] ?? TbDatabase,
}));

const sphereGeometry = new THREE.SphereGeometry(1, 24, 24);
const impulseVec = new THREE.Vector3();
const driftVec = new THREE.Vector3();

type TechSelectCtx = {
  selected: string | null;
  select: (label: string) => void;
  sceneActive: boolean;
  coarsePointer: boolean;
};

const TechSelectContext = createContext<TechSelectCtx | null>(null);

type SphereProps = TechEntry & {
  scale: number;
  spawn: [number, number, number];
};

function TechSphere({ label, color, Icon, scale, spawn }: SphereProps) {
  const ctx = useContext(TechSelectContext);
  const api = useRef<RapierRigidBody | null>(null);
  const isSelected = ctx?.selected === label;
  const sceneActive = ctx?.sceneActive ?? false;
  const coarsePointer = ctx?.coarsePointer ?? false;
  const driftPhase = useRef(Math.random() * Math.PI * 2);

  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color,
        emissive: color,
        emissiveIntensity: isSelected ? 0.85 : 0.25,
        metalness: 0.35,
        roughness: 0.4,
        clearcoat: 0.15,
      }),
    [color, isSelected]
  );

  useFrame((state) => {
    const body = api.current;
    if (!body || !sceneActive) return;

    if (isSelected) {
      body.setLinvel({ x: 0, y: 0, z: 0 }, true);
      body.setAngvel({ x: 0, y: 0, z: 0 }, true);
      return;
    }

    const t = state.clock.elapsedTime + driftPhase.current;
    driftVec.set(
      Math.sin(t * 1.2) * 0.1,
      Math.cos(t * 0.95) * 0.08,
      Math.sin(t * 0.85) * 0.09
    );
    body.applyImpulse(driftVec, true);
  });

  const pushBall = (strength: number) => {
    if (!api.current || isSelected || !sceneActive) return;
    impulseVec.set(
      (Math.random() - 0.5) * strength,
      (Math.random() - 0.5) * strength * 0.8 + strength * 0.25,
      (Math.random() - 0.5) * strength * 0.9
    );
    api.current.applyImpulse(impulseVec, true);
  };

  return (
    <RigidBody
      linearDamping={isSelected ? 4 : 1.4}
      angularDamping={isSelected ? 4 : 0.8}
      friction={0.35}
      restitution={0.4}
      position={spawn}
      ref={api}
      colliders={false}
      gravityScale={isSelected ? 0 : sceneActive ? 1 : 0}
    >
      <BallCollider args={[scale]} />
      <mesh
        castShadow
        receiveShadow
        scale={isSelected ? scale * 1.08 : scale}
        geometry={sphereGeometry}
        material={material}
        onPointerEnter={(e) => {
          e.stopPropagation();
          if (!isSelected && !coarsePointer) pushBall(4);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          if (!coarsePointer) {
            document.body.style.cursor = isSelected ? "pointer" : "grab";
          }
        }}
        onPointerOut={() => {
          if (!coarsePointer) {
            document.body.style.cursor = "default";
          }
        }}
        onPointerDown={(e) => {
          e.stopPropagation();
          if (!isSelected) pushBall(coarsePointer ? 8 : 5);
        }}
        onClick={(e) => {
          e.stopPropagation();
          ctx?.select(label);
        }}
      />
      <Html center distanceFactor={5.5} style={{ pointerEvents: "none" }}>
        <span className={`tech-ball-label ${isSelected ? "tech-ball-label--pinned" : ""}`}>
          {createElement(Icon, { className: "tech-ball-icon" })}
          {label}
        </span>
      </Html>
    </RigidBody>
  );
}

function Pointer({ radius }: { radius: number }) {
  const ctx = useContext(TechSelectContext);
  const ref = useRef<RapierRigidBody>(null);
  const vec = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ pointer, viewport }) => {
    if (!ctx?.sceneActive) return;
    vec.set(
      (pointer.x * viewport.width) / 2,
      (pointer.y * viewport.height) / 2,
      0
    );
    ref.current?.setNextKinematicTranslation(vec);
  });

  return (
    <RigidBody position={[0, 0, 0]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[radius]} />
    </RigidBody>
  );
}

function TouchDragSurface() {
  const ctx = useContext(TechSelectContext);
  if (!ctx?.sceneActive || !ctx.coarsePointer) return null;

  return (
    <mesh position={[0, 0, -4]}>
      <planeGeometry args={[28, 22]} />
      <meshBasicMaterial transparent opacity={0} depthWrite={false} />
    </mesh>
  );
}

function PhysicsBounds() {
  const wall = 9;
  const height = 10;
  return (
    <>
      <RigidBody type="fixed" colliders={false} friction={0.5}>
        <CuboidCollider args={[wall, 0.4, wall]} position={[0, -height, 0]} />
        <CuboidCollider args={[wall, 0.4, wall]} position={[0, height, 0]} />
        <CuboidCollider args={[0.4, height, wall]} position={[-wall, 0, 0]} />
        <CuboidCollider args={[0.4, height, wall]} position={[wall, 0, 0]} />
        <CuboidCollider args={[wall, height, 0.4]} position={[0, 0, -wall]} />
        <CuboidCollider args={[wall, height, 0.4]} position={[0, 0, wall]} />
      </RigidBody>
    </>
  );
}

function TechPhysicsScene({
  balls,
  sceneActive,
  coarsePointer,
}: {
  balls: (TechEntry & { scale: number; spawn: [number, number, number] })[];
  sceneActive: boolean;
  coarsePointer: boolean;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  const select = useCallback((label: string) => {
    setSelected((prev) => (prev === label ? null : label));
  }, []);

  const ctx = useMemo<TechSelectCtx>(
    () => ({ selected, select, sceneActive, coarsePointer }),
    [selected, select, sceneActive, coarsePointer]
  );

  const pointerRadius = coarsePointer ? 2.8 : 1.5;

  return (
    <TechSelectContext.Provider value={ctx}>
      <Physics gravity={[0, -0.18, 0]} paused={!sceneActive}>
        <PhysicsBounds />
        <TouchDragSurface />
        {sceneActive && <Pointer radius={pointerRadius} />}
        {balls.map((ball) => (
          <TechSphere key={ball.label} {...ball} />
        ))}
      </Physics>
    </TechSelectContext.Provider>
  );
}

function packSpawnPositions(count: number): [number, number, number][] {
  const cols = 5;
  const rows = Math.ceil(count / cols);
  const positions: [number, number, number][] = [];
  for (let i = 0; i < count; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = (col - (cols - 1) / 2) * 2.6 + (Math.random() - 0.5) * 0.5;
    const y = (row - (rows - 1) / 2) * 2.4 + (Math.random() - 0.5) * 0.45;
    const z = (Math.random() - 0.5) * 1.2;
    positions.push([x, y, z]);
  }
  return positions;
}

const TechStack = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [sceneActive, setSceneActive] = useState(false);
  const [coarsePointer, setCoarsePointer] = useState(false);
  const { theme } = useTheme();

  const balls = useMemo(() => {
    const spawns = packSpawnPositions(TECH_STACK_ENTRIES.length);
    return TECH_STACK_ENTRIES.map((tech, i) => ({
      ...tech,
      scale: 0.72 + (i % 3) * 0.1,
      spawn: spawns[i],
    }));
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setCoarsePointer(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setSceneActive(entry.isIntersecting),
      { threshold: 0.2, rootMargin: "0px 0px -5% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="techstack" ref={sectionRef}>
      <div className="techstack-title-wrap nav-scroll-target" id="techstack">
        <SectionTitle lead="T" accent="ECH STACK" />
        <p className="techstack-hint">
          <span className="techstack-hint__desktop">
            Scroll here to wake the balls · hover to push · click to pin one
          </span>
          <span className="techstack-hint__touch">
            Scroll here to wake the balls · touch and drag to push · tap to pin one
          </span>
        </p>
      </div>

      <div className={`techstack-canvas-wrap${coarsePointer ? " techstack-canvas-wrap--touch" : ""}`}>
        <Canvas
          shadows
          gl={{ alpha: true, antialias: true }}
          camera={{ position: [0, 0, 16], fov: 50, near: 0.5, far: 80 }}
          onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
          className="tech-canvas"
          style={coarsePointer ? { touchAction: "none" } : undefined}
        >
          <ambientLight intensity={1.3} />
          <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color="white" castShadow />
          <directionalLight position={[0, 5, -4]} intensity={2} />
          <TechPhysicsScene balls={balls} sceneActive={sceneActive} coarsePointer={coarsePointer} />
          <Environment preset={theme === "light" ? "warehouse" : "city"} />
        </Canvas>
      </div>
    </section>
  );
};

export default TechStack;
