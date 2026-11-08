// Vector drafting keeps the architectural detail crisp without a WebGL render loop.
const buildingLines = [
  // Foundation, walls, roof, and glazing are drawn in construction order.
  'm110 504 300 150 260-130v-16L410 638 110 488v16Zm0-16 260-130 300 150',
  'M150 298v193l260 130 220-110V318M410 428v193',
  'm110 278 260-130 300 150v20L410 448 110 298v-20Zm0 0 300 150 260-130M410 428v20',
  'm150 318 260 130 220-110M150 471l260 130 220-110',
  'M215 351v172m65-140v172m65-140v172m120-167v172m55-200v173m55-200v173',
  'm150 392 260 130 220-110M150 451l260 130 220-110',
  'M280 554V433l65 33v121m-54-28V451l43 22v107',
  'm264 276 107-53 144 72-107 54-144-73Zm12 6 95-47 132 66M371 223v12',
  'm168 517-45 23 111 55 46-23m-146-26-21 11 111 55 21-11m-121-39-21 11 111 55 21-11',
];

const floorPlanLines = [
  'M100 90h400v400H100V90Zm10 10h380v380H110V100Z',
  'M110 290h170m55 0h155M300 100v135m0 55v190M110 370h110v110m80-100h190',
  'M280 290v-55a55 55 0 0 1 55 55M300 235h-55a55 55 0 0 1 55-55M380 480v-55a55 55 0 0 1 55 55',
  'M125 115h90v60h-90v-60Zm5 5h35v45h-35v-45Zm40 0h35v45h-35v-45ZM125 115v125h90v-65',
  'M335 135h125v75H335v-75Zm8 8h109v59H343v-59ZM335 150h-10v45h10m125-45h10v45h-10',
  'M345 325h105v35H345v-35Zm10-10v10m20-10v10m20-10v10m20-10v10m20-10v10M140 315h100v35H140v-35Z',
  'M110 395h90m-90 12h90m-90 12h90m-90 12h90m-90 12h90m-90 12h90m-90 12h90',
];

function DraftedLines({ paths, delay = 0 }: { paths: string[]; delay?: number }) {
  return (
    <g className="sketch-structure">
      {paths.map((d, index) => (
        <g key={d}>
          {/* A faint underdrawing keeps the form readable throughout the cycle. */}
          <path d={d} className="sketch-underdrawing" />
          <path d={d} pathLength="1" className="sketch-redraw" style={{ animationDelay: `${delay + index * 0.24}s` }} />
        </g>
      ))}
    </g>
  );
}

export function BuildingSketch() {
  return (
    <svg viewBox="0 0 800 720" fill="none" className="building-sketch">
      <g className="sketch-guides">
        <path d="M30 470 770 100M30 590 770 220M30 710 770 340M90 20 790 370M10 160 790 550M10 340 730 700" />
        <path d="M220 65V670M410 10V710M600 30V665" />
        <ellipse cx="410" cy="492" rx="330" ry="150" />
      </g>
      <g className="sketch-dimensions">
        <path d="m110 544 300 150 260-130M110 527v35m300 115v35m260-165v35M99 549l22-11m278 161 22-11m238-120 22-11" />
        <path d="M704 248v295m-10-295h20m-20 295h20m-15-302 10 14m-10 281 10 14" />
        <text x="213" y="630" transform="rotate(26.5 213 630)">12 000</text>
        <text x="533" y="640" transform="rotate(-26.5 533 640)">8 400</text>
        <text x="724" y="420" transform="rotate(-90 724 420)">CONCEPT / 01</text>
      </g>
      <DraftedLines paths={buildingLines} />
      <g className="sketch-hatching">
        <path d="m160 480 235 117m-235-107 235 117m-235-97 235 117M433 610l187-94m-187 84 187-94" />
        <path d="m126 290 271 135m-257-135 257 128m-242-128 242 121" />
      </g>
      <g className="sketch-accent sketch-draw">
        <path d="m110 278 260-130 300 150M110 488l300 150 260-130" />
        <path d="M410 448v173m55-201v173" />
      </g>
      <path className="sketch-trace" pathLength="1" d="M110 278 370 148 670 298 410 428Z" />
      <path className="sketch-trace sketch-trace-secondary" pathLength="1" d="M110 488 410 638 670 508" />
      <g className="sketch-nodes">
        <circle cx="370" cy="148" r="3" /><circle cx="410" cy="428" r="3" /><circle cx="670" cy="298" r="3" />
      </g>
      <g className="sketch-rings">
        <circle cx="370" cy="148" r="9" /><circle cx="670" cy="298" r="9" />
      </g>
      <g className="sketch-notes">
        <path d="M527 212h105l42-42M155 392H65l-30-30" />
        <text x="585" y="154">ROOF STUDY</text><text x="20" y="349">ELEVATION A</text>
        <text x="310" y="706">FORM / STRUCTURE / DETAIL</text>
      </g>
    </svg>
  );
}

export function FloorPlan() {
  return (
    <svg viewBox="0 0 620 620" fill="none" className="floor-plan">
      <g className="sketch-guides">
        <path d="M30 90h560M30 490h560M100 25v550M500 25v550M300 25v550M30 290h560" />
        <circle cx="300" cy="290" r="250" /><path d="m45 545 510-510M45 35l510 510" />
      </g>
      <DraftedLines paths={floorPlanLines} delay={1.5} />
      <g className="sketch-accent">
        <path d="M155 90h80m100 0h100M500 155v85m0 85v80M155 490h45" strokeWidth="4" />
      </g>
      <path className="sketch-trace" pathLength="1" d="M100 90H500V490H100Z" />
      <path className="sketch-trace sketch-trace-secondary" pathLength="1" d="M110 290H300V380H490" />
      <g className="sketch-nodes">
        <circle cx="100" cy="90" r="3" /><circle cx="500" cy="490" r="3" />
      </g>
      <g className="sketch-rings">
        <circle cx="100" cy="90" r="9" /><circle cx="500" cy="490" r="9" />
      </g>
      <g className="sketch-dimensions">
        <path d="M100 55h400M100 45v20m200-20v20m200-20v20M65 90v400M55 90h20M55 290h20M55 490h20" />
        <text x="190" y="43">6 000</text><text x="390" y="43">6 000</text><text x="250" y="545">GROUND FLOOR / 1:100</text>
      </g>
      <g className="sketch-notes">
        <path d="M545 450v-70m-12 22 12-22 12 22" /><text x="540" y="367">N</text>
      </g>
    </svg>
  );
}
