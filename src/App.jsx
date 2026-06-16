import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Baby,
  Bank,
  BookOpen,
  Briefcase,
  Buildings,
  CaretDown,
  ChartLineUp,
  ForkKnife,
  GraduationCap,
  Heart,
  House,
  List,
  MapPin,
  Palette,
  PersonSimpleRun,
  ShoppingBag,
  Sparkle,
  UsersThree,
  Wallet,
  X,
} from "@phosphor-icons/react";

const stages = [
  { age: "0–5", label: "영유아기", image: "/assets/stage-toddler.png", note: "성장·생활 리듬" },
  { age: "6–12", label: "아동기", image: "/assets/stage-child.png", note: "학습·관심 발견" },
  { age: "13–18", label: "청소년기", image: "/assets/stage-teen.png", note: "진로·관계 형성" },
  { age: "19–34", label: "청년기", image: "/assets/stage-young.png", note: "커리어·독립" },
  { age: "35–59", label: "중년기", image: "/assets/stage-middle.png", note: "가족·자산·건강" },
  { age: "60+", label: "노년기", image: "/assets/stage-senior.png", note: "건강·문화·연결" },
];

const moments = [
  {
    id: "morning",
    label: "기상",
    image: "/assets/moment-morning.png",
    title: "오늘을 시작하는 순간부터",
    insights: [
      ["오늘 복장 준비", "날씨와 일정을 반영한 맞춤 코디를 준비했어요."],
      ["아침 식사 추천", "활동량에 맞춘 단백질 중심 메뉴를 추천합니다."],
      ["세면·양치 루틴", "어제보다 10분 일찍 시작해 여유가 생겼어요."],
    ],
  },
  {
    id: "commute",
    label: "이동",
    image: "/assets/moment-commute.png",
    title: "더 편안하고 빠른 이동",
    insights: [
      ["최적 이동 경로", "혼잡도가 낮은 2번 출구 경로가 가장 빨라요."],
      ["일정 리마인드", "첫 미팅까지 42분, 커피 픽업 시간이 충분해요."],
      ["이동 중 콘텐츠", "관심 분야의 12분 오디오 브리핑을 준비했어요."],
    ],
  },
  {
    id: "health",
    label: "건강",
    image: "/assets/moment-health.png",
    title: "데이터로 먼저 살피는 건강",
    insights: [
      ["건강 변화 감지", "최근 수면과 심박 패턴의 변화를 확인했어요."],
      ["검진 준비", "지난 기록을 바탕으로 상담 질문을 정리했어요."],
      ["생활 습관 제안", "이번 주에는 저녁 산책 20분이 적합해요."],
    ],
  },
  {
    id: "activity",
    label: "활동",
    image: "/assets/moment-activity.png",
    title: "좋아하는 활동을 더 가깝게",
    insights: [
      ["주말 활동 추천", "날씨와 체력 상태에 맞는 가벼운 코스예요."],
      ["친구 일정 연결", "함께할 수 있는 시간이 토요일 오후에 겹쳐요."],
      ["회복 가이드", "활동 후 수분과 스트레칭 알림을 준비했어요."],
    ],
  },
  {
    id: "family",
    label: "가족",
    image: "/assets/moment-family.png",
    title: "함께하는 시간을 더 깊게",
    insights: [
      ["가족 식단", "모두의 선호와 건강 목표를 반영한 메뉴예요."],
      ["공유 일정", "이번 주 가족 모두가 가능한 저녁은 목요일이에요."],
      ["생활 지원", "부모님 검진과 아이 준비물을 한 번에 정리했어요."],
    ],
  },
  {
    id: "senior",
    label: "노년",
    image: "/assets/moment-senior.png",
    title: "새로운 경험이 계속되도록",
    insights: [
      ["문화 생활 추천", "관심 작가의 전시가 가까운 미술관에서 열려요."],
      ["편안한 이동", "엘리베이터와 휴식 공간이 많은 동선을 찾았어요."],
      ["안심 연결", "가족에게 귀가 예정 시간을 부드럽게 공유했어요."],
    ],
  },
];

const nodes = [
  { label: "건강", icon: Heart, x: 50, y: 3 },
  { label: "교육", icon: GraduationCap, x: 78, y: 14 },
  { label: "커리어", icon: Briefcase, x: 94, y: 38 },
  { label: "금융", icon: Bank, x: 90, y: 69 },
  { label: "주거", icon: House, x: 69, y: 88 },
  { label: "여가", icon: Palette, x: 38, y: 94 },
  { label: "이동", icon: MapPin, x: 11, y: 78 },
  { label: "관계", icon: UsersThree, x: 3, y: 48 },
  { label: "소비", icon: ShoppingBag, x: 18, y: 20 },
  { label: "활동", icon: PersonSimpleRun, x: 35, y: 15 },
  { label: "경험", icon: Buildings, x: 72, y: 53 },
  { label: "관심사", icon: Sparkle, x: 27, y: 61 },
];

const expansion = [
  { number: "01", title: "개인화 서비스 확대", description: "한 사람의 맥락을 더 깊이 이해합니다.", icon: Sparkle },
  { number: "02", title: "생애주기 확장", description: "모든 시기의 변화와 성장을 함께합니다.", icon: UsersThree },
  { number: "03", title: "비식별 데이터 솔루션", description: "안전한 연결로 더 큰 가능성을 만듭니다.", icon: Bank },
  { number: "04", title: "분석 리포트", description: "복잡한 데이터를 명확한 판단으로 바꿉니다.", icon: ChartLineUp },
  { number: "05", title: "무한 서비스 확대", description: "산업과 일상의 경계를 넘어 확장합니다.", icon: Buildings },
];

function Logo({ light = false }) {
  return (
    <a className={`logo ${light ? "logo-light" : ""}`} href="#top" aria-label="FOX Connect 홈">
      <img src="/assets/fox-connect-logo-white.png" alt="FOX Connect" />
    </a>
  );
}

function AnimatedFutureLine({ children, offset = 0 }) {
  return (
    <span className="future-letter-line" aria-hidden="true">
      {Array.from(children).map((character, index) => (
        <span
          className={`future-char${character === " " ? " future-char-space" : ""}`}
          style={{ "--char-index": offset + index }}
          key={`${character}-${index}`}
        >
          {character === " " ? "\u00a0" : character}
        </span>
      ))}
    </span>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMoment, setActiveMoment] = useState(0);
  const [activeNode, setActiveNode] = useState("건강");
  const [scrolled, setScrolled] = useState(false);
  const currentMoment = moments[activeMoment];
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.18 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveMoment((current) => (current + 1) % moments.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [activeMoment]);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main id="top">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner">
          <Logo light />
          <nav className={menuOpen ? "is-open" : ""} aria-label="주요 메뉴">
            <button onClick={() => scrollTo("#life-cycle")}>Life OS.ONE</button>
            <button onClick={() => scrollTo("#moments")}>소식</button>
            <a href="mailto:sales@foxconnect.kr">문의하기</a>
            <button onClick={() => scrollTo("#fox")}>FOX STEAM</button>
          </nav>
          <button className="lang-button" aria-label="언어 선택">
            <span>◌</span> KR
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴 열기">
            {menuOpen ? <X /> : <List />}
          </button>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media">
          <img src="/assets/hero-orb.png" alt="" />
          <div className="hero-copy">
            <h1 id="hero-title">Life OS.ONE</h1>
            <p>삶의 운영체제<br />그 이상의 AI</p>
          </div>
        </div>
        <button className="next-button" onClick={() => scrollTo("#life-cycle")}>
          Next intelligence <ArrowDown weight="bold" />
        </button>
      </section>

      <section className="life-cycle section" id="life-cycle">
        <div className="section-inner">
          <h2 className="display-title" data-reveal>삶의 모든 순간은<br /><span>데이터가 됩니다.</span></h2>
          <div className="stage-track" data-reveal>
            {stages.map(({ age, label, image, note }, index) => (
              <article className="stage" key={label} style={{ "--delay": `${index * 80}ms` }}>
                <div className="stage-portrait"><img src={image} alt={`${label} 인물`} /></div>
                <span className="stage-age">{age}</span>
                <h3>{label}</h3>
                <p>{note}</p>
              </article>
            ))}
          </div>
          <div className="stage-progress" aria-hidden="true"><span /></div>
        </div>
      </section>

      <section className="moments section" id="moments">
        <div className="section-inner">
          <div className="moments-heading" data-reveal>
            <h2>Life OS.ONE은 삶의 데이터를 이해하고<br /><span>의미 있는 인사이트로 연결합니다.</span></h2>
          </div>
          <div className="moment-tabs" role="tablist" aria-label="생활 장면 선택">
            {moments.map((moment, index) => (
              <button
                className={index === activeMoment ? "is-active" : ""}
                onClick={() => setActiveMoment(index)}
                role="tab"
                aria-selected={index === activeMoment}
                key={moment.id}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>{moment.label}
              </button>
            ))}
          </div>
          <div className="moment-progress" aria-hidden="true"><span key={activeMoment} /></div>
          <div className={`moment-stage moment-${currentMoment.id}`} key={currentMoment.id}>
            <img src={currentMoment.image} alt={`${currentMoment.label} 생활 장면`} />
            <div className="moment-title">
              <span>Life insight</span>
              <h3>{currentMoment.title}</h3>
            </div>
            <div className="insight-stack">
              {currentMoment.insights.map(([title, body], index) => (
                <article className="insight" key={title} style={{ "--delay": `${index * 100}ms` }}>
                  <Sparkle weight="fill" />
                  <div><h4>{title}</h4><p>{body}</p></div>
                </article>
              ))}
            </div>
            <button
              className="moment-next"
              onClick={() => setActiveMoment((activeMoment + 1) % moments.length)}
              aria-label="다음 생활 장면"
            >
              <ArrowUpRight />
            </button>
          </div>
        </div>
      </section>

      <section className="connected section" id="connected">
        <div className="connected-inner">
          <div className="connected-copy" data-reveal>
            <h2>삶의 모든 데이터를<br />하나의 맥락으로 <span>연결합니다.</span></h2>
          </div>
          <div className="node-system" data-reveal>
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="orbit orbit-c" />
            <div className="flow-ring flow-ring-a" />
            <div className="flow-ring flow-ring-b" />
            <div className="flow-beam beam-a" />
            <div className="flow-beam beam-b" />
            <div className="flow-beam beam-c" />
            <div className="flow-beam beam-d" />
            <button className="core" onClick={() => setActiveNode("모든")}>
              <small>Everything into</small>
              <strong>Life<br />OS.ONE</strong>
            </button>
            {nodes.map(({ label, icon: Icon, x, y }, index) => (
              <button
                key={label}
                className={`data-node ${activeNode === label ? "is-active" : ""}`}
                style={{ left: `${x}%`, top: `${y}%`, "--delay": `${index * -0.22}s` }}
                onMouseEnter={() => setActiveNode(label)}
                onFocus={() => setActiveNode(label)}
                onClick={() => setActiveNode(label)}
              >
                <Icon weight="duotone" /><span>{label}</span>
              </button>
            ))}
            <div className="particle p1" /><div className="particle p2" /><div className="particle p3" />
            <div className="data-pulse pulse-a" /><div className="data-pulse pulse-b" />
            <div className="data-pulse pulse-c" /><div className="data-pulse pulse-d" />
          </div>
        </div>
      </section>

      <section className="future section" id="future" data-reveal>
        <div className="future-inner">
          <h2>
            Life OS.ONE과 함께<br />
            모두의 삶이 <span>더 나아지는 미래</span>를<br />
            만듭니다.
          </h2>
          <div className="future-line" />
          <p className="future-en" aria-label="Better Life, Better Future">
            <AnimatedFutureLine offset={0}>Better Life,</AnimatedFutureLine>
            <AnimatedFutureLine offset={12}>Better Future</AnimatedFutureLine>
          </p>
        </div>
      </section>

      <section className="fox section" id="fox">
        <div className="fox-glow" />
        <div className="section-inner">
          <div className="fox-heading" data-reveal>
            <p className="fox-watermark" aria-hidden="true">F.O.X</p>
            <h2>F.O.X</h2>
            <h3>Future of X Connect</h3>
            <p>우리는 Life OS.ONE을 위한 기반을 준비했고,<br />이제 무한 확장으로 나아갑니다.</p>
          </div>
          <div className="expansion-grid">
            {expansion.map(({ number, title, description, icon: Icon }, index) => (
              <article className="expansion-card" data-reveal key={number} style={{ "--index": index }} tabIndex="0">
                <div className="expansion-icon">
                  <Icon weight="duotone" />
                </div>
                <span className="expansion-number">{number}</span>
                <h4>{title}</h4>
                <p>{description}</p>
                <span className="expansion-signal" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-trace" />
        <div className="footer-inner">
          <div className="footer-top">
            <Logo light />
            <p>삶을 이해하고, 가능성을 연결합니다.</p>
            <a className="contact-link" href="mailto:sales@foxconnect.kr">Contact us <ArrowUpRight /></a>
          </div>
          <div className="footer-grid">
            <div>
              <h3>(주)폭스커넥트</h3>
              <p>본사 : 경기도 성남시 분당구 운중로 194, 3층(운중동)</p>
              <p>폭스러닝센터 대전센터 : 대전광역시 유성구 엑스포로97번길 40, 2F 204호</p>
            </div>
            <div>
              <p>대표자 : 이종탁</p>
              <p>사업자 등록번호 : 697-88-02547</p>
              <a href="mailto:sales@foxconnect.kr">sales@foxconnect.kr</a>
            </div>
            <div className="footer-links">
              <a href="#terms">사용자 이용약관</a>
              <a href="#privacy">개인정보 처리방침</a>
              <button>관련 사이트 <CaretDown /></button>
            </div>
          </div>
          <div className="footer-bottom">
            <p>COPYRIGHT© FOX CONNECT CO., LTD. ALL RIGHTS RESERVED.</p>
            <span>Life OS.ONE</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
