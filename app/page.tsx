import { CalendarDays, CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";
import { UpdateSection, updates } from "../data/updates";

const sections: UpdateSection[] = ["于适微博动态", "于适工作室微博动态", "活动行程", "采访视频"];

const categoryColors: Record<string, string> = {
  "本人动态": "category official",
  "工作室动态": "category community",
  "活动行程": "category schedule",
  "采访视频": "category interview",
  "粉丝内容": "category fan",
  "待核验": "category pending"
};

export default function Home() {
  const dates = Array.from(new Set(updates.map((item) => item.eventDate))).sort().reverse();
  const sortedUpdates = [...updates].sort((a, b) => b.eventDate.localeCompare(a.eventDate));

  return (
    <main>
      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">Yosh Dynamics</p>
          <h1>于适动态</h1>
        </div>
      </section>

      <header className="topbar">
        <div>
          <p className="eyebrow">公开信息整理站</p>
          <h2>动态归档</h2>
        </div>
        <nav>
          {sections.map((section) => (
            <a href={`#${section}`} key={section}>
              {section.replace("于适", "")}
            </a>
          ))}
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
        <div className="feed">
          {sections.map((section) => {
            const sectionItems = sortedUpdates.filter((item) => item.section === section);

            return (
              <section className="updateSection" id={section} key={section}>
                <div className="sectionHead">
                  <h2>{section}</h2>
                  <p>按时间降序</p>
                </div>

                <div className="sectionBody">
                  {sectionItems.length > 0 ? (
                    sectionItems.map((item) => (
                      <article className="updateCard" key={item.id}>
                        <div className="cardMeta">
                          <span className={categoryColors[item.category]}>{item.category}</span>
                          <span className="date">
                            <CalendarDays size={15} />
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
                    ))
                  ) : (
                    <div className="emptyState">暂无更新</div>
                  )}
                </div>
              </section>
            );
          })}
        </div>

      </section>

      <footer>
        本站为公开信息整理示例。正式上线前，请保留来源链接，并避免发布未公开行程、隐私信息或未授权图片。
      </footer>
    </main>
  );
}
