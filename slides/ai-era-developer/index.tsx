import type { CSSProperties, ReactNode } from 'react';
import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';

export const design: DesignSystem = {
  palette: { bg: '#0b0b0d', text: '#f5f3ee', accent: '#f5b83d' },
  fonts: {
    display: '"Pretendard", "Apple SD Gothic Neo", system-ui, -apple-system, sans-serif',
    body: '"Pretendard", "Apple SD Gothic Neo", system-ui, -apple-system, sans-serif',
  },
  typeScale: { hero: 150, body: 40 },
  radius: 12,
};

const muted = '#9a968c';
const line = '#2a2a2e';
const panel = '#151518';

const fill: CSSProperties = {
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  position: 'relative',
  fontFamily: 'var(--osd-font-body)',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  wordBreak: 'keep-all',
};

const content: CSSProperties = { ...fill, padding: 120 };

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      fontSize: 26,
      fontWeight: 600,
      color: 'var(--osd-accent)',
      letterSpacing: '0.18em',
      marginBottom: 24,
    }}
  >
    {children}
  </div>
);

const Heading = ({ children }: { children: ReactNode }) => (
  <h2
    style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: 72,
      fontWeight: 800,
      lineHeight: 1.2,
      margin: 0,
    }}
  >
    {children}
  </h2>
);

const Footer = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: 'absolute',
        left: 120,
        right: 120,
        bottom: 48,
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 22,
        color: muted,
      }}
    >
      <span>AI 시대 개발자의 미래</span>
      <span>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
};

const Accent = ({ children }: { children: ReactNode }) => (
  <span style={{ color: 'var(--osd-accent)', fontWeight: 700 }}>{children}</span>
);

const bulletList: CSSProperties = {
  fontSize: 'var(--osd-size-body)',
  lineHeight: 1.5,
  margin: '56px 0 0',
  paddingLeft: 44,
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
};

// ---------- 01 Cover ----------
const Cover: Page = () => (
  <div
    style={{
      ...fill,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 160px',
    }}
  >
    <Eyebrow>2025-10-22</Eyebrow>
    <h1
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 'var(--osd-size-hero)',
        fontWeight: 900,
        lineHeight: 1.1,
        margin: '8px 0 40px',
      }}
    >
      AI 시대
      <br />
      개발자의 미래
    </h1>
    <p style={{ fontSize: 48, color: muted, margin: 0 }}>변하지 않는 본질에 집중하라</p>
    <div style={{ width: 120, height: 6, background: 'var(--osd-accent)', margin: '56px 0 32px' }} />
    <p style={{ fontSize: 30, color: muted, margin: 0 }}>발표자: msbaek</p>
  </div>
);

// ---------- 02 뜬장의 시대 ----------
const Anxiety: Page = () => (
  <div style={content}>
    <Eyebrow>01 · 뜬장의 시대</Eyebrow>
    <Heading>우리의 현실: AI 시대의 불안</Heading>
    <ul style={bulletList}>
      <li>
        모든 것이 <Accent>하루가 다르게</Accent> 변한다
      </li>
      <li>우리는 안정을 원한다</li>
      <li>하지만 안정이 언제 올지 모른다</li>
      <li>"AI가 우리를 대체할지 모른다"는 불안</li>
      <li>
        미래 예측은 불가능하다 → <Accent>"변하지 않을 것"</Accent>을 찾는다
      </li>
    </ul>
    <Footer />
  </div>
);

// ---------- 03 베조스 ----------
const Invariant = ({ name, desc }: { name: string; desc: string }) => (
  <div
    style={{
      flex: 1,
      background: panel,
      border: `1px solid ${line}`,
      borderRadius: 'var(--osd-radius)',
      padding: '36px 40px',
    }}
  >
    <div style={{ fontSize: 44, fontWeight: 800, color: 'var(--osd-accent)' }}>{name}</div>
    <div style={{ fontSize: 30, color: muted, marginTop: 12 }}>{desc}</div>
  </div>
);

const Bezos: Page = () => (
  <div style={content}>
    <Eyebrow>02 · 제프 베조스의 통찰</Eyebrow>
    <Heading>"변하지 않을 것"은 압니다</Heading>
    <div
      style={{
        marginTop: 56,
        paddingLeft: 36,
        borderLeft: '6px solid var(--osd-accent)',
        fontSize: 'var(--osd-size-body)',
        lineHeight: 1.6,
      }}
    >
      <div style={{ color: muted }}>기자: "향후 10년이 어떻게 변할 것 같습니까?"</div>
      <div>베조스: "그걸 어떻게 압니까? 알 수 없습니다."</div>
      <div>
        "하지만 나는 <Accent>'변하지 않을 것'</Accent>은 압니다."
      </div>
    </div>
    <div style={{ fontSize: 30, color: muted, margin: '64px 0 24px' }}>아마존의 3가지 불변</div>
    <div style={{ display: 'flex', gap: 40 }}>
      <Invariant name="Selection" desc="선택의 다양성" />
      <Invariant name="Pricing" desc="가격" />
      <Invariant name="Fulfillment" desc="배송 / 이행" />
    </div>
    <Footer />
  </div>
);

// ---------- 04 본질적 vs 우발적 ----------
const Column = ({
  label,
  title,
  highlight,
  children,
}: {
  label: string;
  title: string;
  highlight?: boolean;
  children: ReactNode;
}) => (
  <div
    style={{
      flex: 1,
      background: panel,
      border: highlight ? '2px solid var(--osd-accent)' : `1px solid ${line}`,
      borderRadius: 'var(--osd-radius)',
      padding: '40px 48px',
    }}
  >
    <div
      style={{
        fontSize: 24,
        letterSpacing: '0.14em',
        color: highlight ? 'var(--osd-accent)' : muted,
      }}
    >
      {label}
    </div>
    <div style={{ fontSize: 44, fontWeight: 800, margin: '12px 0 28px' }}>{title}</div>
    <ul
      style={{
        fontSize: 34,
        lineHeight: 1.5,
        margin: 0,
        paddingLeft: 36,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
      }}
    >
      {children}
    </ul>
  </div>
);

const Essence: Page = () => (
  <div style={content}>
    <Eyebrow>03 · 소프트웨어 개발의 본질</Eyebrow>
    <Heading>도구는 변해도 본질은 변하지 않는다</Heading>
    <div style={{ display: 'flex', gap: 48, marginTop: 56 }}>
      <Column label="ACCIDENTAL" title="변하는 것 (우발적 복잡성)">
        <li>프로그래밍 언어</li>
        <li>프레임워크, 도구</li>
        <li>인프라, 플랫폼</li>
        <li style={{ color: muted }}>→ AI가 많이 해결해줄 수 있음</li>
      </Column>
      <Column label="ESSENTIAL" title="변하지 않는 것 (본질적 복잡성)" highlight>
        <li>문제를 이해하는 것 (Understanding)</li>
        <li>요구사항을 명세하는 것 (Specification)</li>
        <li>결과를 검증하는 것 (Verification)</li>
        <li>복잡도를 관리하는 것</li>
      </Column>
    </div>
    <p style={{ fontSize: 28, color: muted, margin: '36px 0 0' }}>
      Fred Brooks (1986), "No Silver Bullet"
    </p>
    <Footer />
  </div>
);

// ---------- 05 반복되는 공포 ----------
const cell: CSSProperties = { padding: '18px 24px', fontSize: 30, lineHeight: 1.4 };

const HistoryRow = ({
  era,
  tool,
  fear,
  result,
  highlight,
}: {
  era: string;
  tool: string;
  fear: string;
  result: string;
  highlight?: boolean;
}) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '200px 440px 1fr 440px',
      borderTop: `1px solid ${line}`,
      color: highlight ? 'var(--osd-accent)' : 'var(--osd-text)',
      fontWeight: highlight ? 700 : 400,
    }}
  >
    <div style={{ ...cell, color: highlight ? 'var(--osd-accent)' : muted }}>{era}</div>
    <div style={cell}>{tool}</div>
    <div style={cell}>{fear}</div>
    <div style={cell}>{result}</div>
  </div>
);

const History: Page = () => (
  <div style={content}>
    <Eyebrow>04 · 역사는 반복된다</Eyebrow>
    <Heading>개발 도구의 진화: 매번 반복되는 공포</Heading>
    <div style={{ marginTop: 48 }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '200px 440px 1fr 440px',
          color: muted,
          fontSize: 24,
          letterSpacing: '0.1em',
        }}
      >
        <div style={{ padding: '0 24px 14px' }}>시대</div>
        <div style={{ padding: '0 24px 14px' }}>도구</div>
        <div style={{ padding: '0 24px 14px' }}>당시의 공포</div>
        <div style={{ padding: '0 24px 14px' }}>실제 결과</div>
      </div>
      <HistoryRow era="1960s" tool="Assembly → COBOL" fear={'"고급 언어면 개발자 불필요"'} result="더 복잡한 시스템" />
      <HistoryRow era="1980s" tool="3GL → CASE 도구" fear={'"자동 생성이면 끝"'} result="도구는 보조 수단" />
      <HistoryRow era="1990s" tool="CASE → 4GL" fear={'"코딩 없이 개발"'} result="특정 영역만 유용" />
      <HistoryRow era="2000s" tool="온프레미스 → 클라우드" fear={'"인프라 팀 불필요"'} result="DevOps 엔지니어 등장" />
      <HistoryRow era="2020s" tool="코딩 → AI" fear={'"개발자 사라질 것"'} result="???" highlight />
    </div>
    <p style={{ fontSize: 34, margin: '40px 0 0' }}>
      실제로는 항상 <Accent>더 고차원적인 문제</Accent>로 이동했고, 개발자 수는 증가했다
    </p>
    <Footer />
  </div>
);

// ---------- 06 코딩의 비중 ----------
const Share = ({ label, pct }: { label: string; pct: string }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 36,
      lineHeight: 1.5,
      padding: '12px 0',
      borderBottom: `1px solid ${line}`,
    }}
  >
    <span>{label}</span>
    <span style={{ color: muted }}>{pct}</span>
  </div>
);

const CodingShare: Page = () => (
  <div style={content}>
    <Eyebrow>04 · 역사는 반복된다</Eyebrow>
    <Heading>코딩의 진짜 비중</Heading>
    <div style={{ display: 'flex', gap: 96, marginTop: 40, alignItems: 'center' }}>
      <div style={{ width: 640 }}>
        <div
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 280,
            fontWeight: 900,
            lineHeight: 1,
            color: 'var(--osd-accent)',
          }}
        >
          24%
        </div>
        <div style={{ fontSize: 34, color: muted, marginTop: 16 }}>
          전체 프로젝트 시간 중 실제 코딩
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 28, color: muted, marginBottom: 8 }}>나머지 76%</div>
        <Share label="요구사항 분석" pct="20%" />
        <Share label="테스트 및 디버깅" pct="20%" />
        <Share label="설계 및 아키텍처" pct="16%" />
        <Share label="회의 및 협업" pct="12%" />
        <Share label="컨텍스트 수집" pct="8%" />
      </div>
    </div>
    <p style={{ fontSize: 34, margin: '44px 0 0' }}>
      AI가 코딩을 10배 빠르게 해줘도, <Accent>전체 생산성은 크게 안 변함</Accent>
    </p>
    <Footer />
  </div>
);

// ---------- 07 Kent Beck 90 vs 10 ----------
const NinetyTen: Page = () => (
  <div style={content}>
    <Eyebrow>04 · 역사는 반복된다</Eyebrow>
    <Heading>Kent Beck: 90% vs 10%</Heading>
    <div style={{ display: 'flex', gap: 48, marginTop: 56 }}>
      <Column label="90%" title="가치를 잃는 기술">
        <li>특정 언어의 문법</li>
        <li>API 문서 암기</li>
        <li>보일러플레이트 코드 작성</li>
      </Column>
      <Column label="10%" title="1000배 증폭되는 기술" highlight>
        <li>비전 설정과 마일스톤 관리</li>
        <li>복잡성 제어와 아키텍처 설계</li>
        <li>도메인 이해와 요구사항 분석</li>
        <li>팀 협업과 코드 리뷰</li>
      </Column>
    </div>
    <Footer />
  </div>
);

// ---------- 08 Augmented vs Vibe ----------
const AugmentedVsVibe: Page = () => (
  <div style={content}>
    <Eyebrow>06 · AI와 춤추기</Eyebrow>
    <Heading>Augmented vs Vibe Coding</Heading>
    <div style={{ display: 'flex', gap: 48, marginTop: 56 }}>
      <Column label="VIBE CODING" title={'"동작만 하면 OK"'}>
        <li>단기: 빠르고 쉬움</li>
        <li>복잡도가 누적됨</li>
        <li>장기: 절망의 구덩이</li>
      </Column>
      <Column label="AUGMENTED CODING" title={'"동작하는 코드를 tidy하게"'} highlight>
        <li>코드 품질 유지</li>
        <li>복잡도 관리</li>
        <li>테스트는 필수</li>
        <li>지속 가능한 개발</li>
      </Column>
    </div>
    <Footer />
  </div>
);

// ---------- 09 실험 ----------
const Experiment = ({
  when,
  effort,
  title,
  children,
}: {
  when: string;
  effort: string;
  title: string;
  children: ReactNode;
}) => (
  <div
    style={{
      flex: 1,
      background: panel,
      border: `1px solid ${line}`,
      borderRadius: 'var(--osd-radius)',
      padding: '36px 40px',
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
      <span style={{ fontSize: 40, fontWeight: 800, color: 'var(--osd-accent)' }}>{when}</span>
      <span style={{ fontSize: 26, color: muted }}>{effort}</span>
    </div>
    <div style={{ fontSize: 34, fontWeight: 700, margin: '20px 0 20px' }}>{title}</div>
    <ul
      style={{
        fontSize: 28,
        lineHeight: 1.5,
        margin: 0,
        paddingLeft: 30,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      {children}
    </ul>
  </div>
);

const Experiments: Page = () => (
  <div style={content}>
    <Eyebrow>07 · 실험 시작하기</Eyebrow>
    <Heading>지금 바로 시작할 실험들</Heading>
    <div style={{ display: 'flex', gap: 40, marginTop: 56 }}>
      <Experiment when="오늘" effort="30분" title="AI 도구 가볍게 체험">
        <li>도구 선택</li>
        <li>간단한 요청 (유틸리티 함수)</li>
        <li>결과 확인 및 대화</li>
        <li>배운 점 메모</li>
      </Experiment>
      <Experiment when="이번 주" effort="2–3시간" title="테스트 먼저 작성">
        <li>Acceptance Test 작성</li>
        <li>AI에게 구현 요청</li>
        <li>생성된 코드 리뷰</li>
        <li>리팩토링 (Tidy First)</li>
      </Experiment>
      <Experiment when="이번 달" effort="10–20시간" title="소규모 기능 개발">
        <li>Week 1: 계획과 명세</li>
        <li>Week 2: AI와 구현</li>
        <li>Week 3: 개선</li>
        <li>Week 4: 팀과 회고</li>
      </Experiment>
    </div>
    <Footer />
  </div>
);

// ---------- 10 Closing ----------
const Closing: Page = () => (
  <div
    style={{
      ...fill,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 160px',
    }}
  >
    <Eyebrow>최종 메시지</Eyebrow>
    <p style={{ fontSize: 44, lineHeight: 1.5, color: muted, margin: 0 }}>
      "AI가 당신의 일자리를 뺏지 않습니다."
    </p>
    <p style={{ fontSize: 44, lineHeight: 1.5, margin: 0 }}>
      "AI를 활용할 줄 아는 개발자가 뺏을 뿐입니다."
    </p>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 96,
        fontWeight: 900,
        lineHeight: 1.2,
        margin: '64px 0',
      }}
    >
      답을 모르면,
      <br />
      <span style={{ color: 'var(--osd-accent)' }}>실험하면 됩니다.</span>
    </h2>
    <p style={{ fontSize: 40, lineHeight: 1.5, margin: 0 }}>
      도구는 계속 변하지만, 문제를 정의하고 해결하는 능력은 영원합니다.
    </p>
  </div>
);

export const notes: (string | undefined)[] = [
  `"여러분, AI 시대에 개발자로 살아남을 수 있을까요? 오늘은 불확실한 미래 속에서 우리가 집중해야 할 본질에 대해 이야기하겠습니다."
핵심 메시지: 답을 모를 때는 실험한다. 실패해도 괜찮다. 배움이 목적이다.`,
  `핵심 메시지: 불안은 자연스러운 것, 인정하고 넘어가자. 예측 대신 "변하지 않을 것"에 집중하라.
전환: "그렇다면 변하지 않는 것은 무엇일까요? 제프 베조스에게 배워봅시다."`,
  `핵심 메시지: 변하지 않을 것에 집중하는 것이 성공의 비결.
예시: "10년 후에도 고객은 더 많은 선택, 더 낮은 가격, 더 빠른 배송을 원할 것"
전환: "개발자에게도 똑같이 적용됩니다."`,
  `핵심 메시지: AI는 우발적 복잡성만 해결, 본질적 복잡성은 개발자 몫.
예시: "1970년대나 지금이나, '고객이 진짜 원하는 게 뭔지' 파악하는 건 여전히 어렵다"`,
  `핵심 메시지: 역사적으로 도구 발전은 항상 개발자 수요 증가로 이어짐.
매 10년마다 "이제 개발자 필요없다"는 공포가 있었지만 항상 틀렸다.
전환: "그렇다면 코딩의 비중은 얼마나 될까요?"`,
  `핵심 메시지: 코딩은 전체의 일부, AI로 코딩이 빨라져도 병목은 다른 곳.
전환: "Kent Beck의 통찰을 봅시다."`,
  `핵심 메시지: AI 시대에 핵심 역량의 가치가 폭발적으로 증가.
Kent Beck: "비전을 가지고 복잡성을 관리하는 능력이 이제 엄청나게 중요해졌다"`,
  `핵심 메시지: AI 시대에도 코드 품질은 중요, Augmented 방식을 선택하라.
예시: Vibe — AI가 만든 500줄 함수 그대로 커밋. Augmented — AI 결과를 리뷰하고 10개 함수로 분리.`,
  `핵심 메시지: 오늘 바로 시작 가능, 30분이면 충분. 테스트 먼저가 AI 시대의 핵심 패턴. 혼자보다 팀과 함께.
전환: "마지막으로 기억할 것들입니다."`,
  `마무리 멘트: "오늘 집에 가서 30분만 AI 도구를 써보세요. 그게 첫 번째 실험입니다. 실패해도 괜찮습니다. 배우면 됩니다."
전환: "질문 받겠습니다."`,
];

export const meta: SlideMeta = {
  title: 'AI 시대 개발자의 미래',
  createdAt: '2026-09-30T22:00:56.383Z',
};

export default [
  Cover,
  Anxiety,
  Bezos,
  Essence,
  History,
  CodingShare,
  NinetyTen,
  AugmentedVsVibe,
  Experiments,
  Closing,
] satisfies Page[];
