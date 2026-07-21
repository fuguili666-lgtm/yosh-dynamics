import { CalendarDays, CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";
import { updates } from "../data/updates";

const categoryColors: Record<string, string> = {
  "本人动态": "category official",
  "官方/后援会": "category community",
  "活动行程": "category schedule",
  "粉丝内容": "category fan",
  "待核验": "category pending"
};

export default function Home() {
  const dates = Array.from(new Set(updates.map((item) => item.eventDate))).sort().reverse();

  return (
    <main>
      <header className="topbar">
        <div>
          <p className="eyebrow">公开信息整理站</p>
          <h1>于适动态</h1>
        </div>
        <nav>
          <a href="#latest">最新</a>
          <a href="#timeline">时间线</a>
          <a href="#schedule">行程</a>
        </nav>
      </header>

      <section className="summary">
        <div>
          <p className="eyebrow">今日运营重点</p>
          <h2>先把每条动态说清楚：发生了什么，来自哪里，是否核验。</h2>
        </div>
        <div className="metrics" aria-label="站点概览">
          <span>{updates.length} 条动态</span>
          <span>{dates.length} 个日期</span>
          <span>可信度分级</span>
        </div>
      </section>

      <section className="layout">
        <div className="feed" id="latest">
          <div className="sectionHead">
            <h2>最新动态</h2>
            <p>按日期倒序展示，适合每日更新。</p>
          </div>

          {updates.map((item) => (
            <article className="updateCard" key={item.id}>
              <div className="cardMeta">
                <span className={categoryColors[item.category]}>{item.category}</span>
                <span className="date">
                  <CalendarDays size={16} />
                  {item.eventDate}
                </span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              {item.imageUrls && item.imageUrls.length > 0 ? (
                <div className="imageGrid" aria-label={`${item.title} 图片`}>
                  {item.imageUrls.map((imageUrl) => (
                    <img src={imageUrl} alt={item.title} key={imageUrl} />
                  ))}
                </div>
              ) : null}
              <div className="badges">
                <span>{item.platform}</span>
                <span>
                  <ShieldCheck size={14} />
                  {item.credibility}
                </span>
                <span>
                  <CheckCircle2 size={14} />
                  {item.status}
                </span>
              </div>
              <div className="tags">
                {item.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
              {item.sourceUrl ? (
                <a className="source" href={item.sourceUrl} target="_blank" rel="noreferrer">
                  {item.sourceName}
                  <ExternalLink size={15} />
                </a>
              ) : (
                <span className="source muted">暂无可公开核验原链接</span>
              )}
            </article>
          ))}
        </div>

        <aside>
          <section className="panel" id="timeline">
            <h2>时间线</h2>
            {dates.map((date) => (
              <a className="timelineItem" href="#latest" key={date}>
                <span>{date}</span>
                <strong>{updates.filter((item) => item.eventDate === date).length} 条</strong>
              </a>
            ))}
          </section>

          <section className="panel" id="schedule">
            <h2>近期行程</h2>
            <div className="scheduleItem">
              <span>2026-07-25 至 2026-07-26</span>
              <strong>「适诗」2026巡回演唱会上海站</strong>
              <p>上海梅赛德斯-奔驰文化中心</p>
            </div>
            <div className="scheduleItem">
              <span>2026-07-21 10:00</span>
              <strong>88VIP超酷音乐盛典重启预售</strong>
              <p>来源为公开新闻，具体出席以官方发布为准。</p>
            </div>
          </section>
        </aside>
      </section>

      <footer>
        本站为公开信息整理示例。正式上线前，请保留来源链接，并避免发布未公开行程、隐私信息或未授权图片。
      </footer>
    </main>
  );
}
