# 于适动态站 Starter

这是一个可以直接上线的第一版原型：用本地 `data/updates.ts` 管理动态，首页展示最新动态、时间线、行程和来源可信度。

## 第一步该做什么

先不要做全自动爬虫。第一步是把“动态信息结构”定下来，并用人工录入跑通网站。

你每天只需要维护 `data/updates.ts`：

```ts
{
  id: "2026-07-20-fanclub-vote",
  title: "于适官方后援会发起超话投票",
  summary: "7月20日19:00起，后援会就相关议题发起投票。",
  eventDate: "2026-07-20",
  platform: "微博",
  sourceName: "新浪微博公开索引",
  sourceUrl: "https://www.sina.cn/news/detail/5317682704680586.html",
  category: "官方/后援会",
  credibility: "B 媒体/平台索引",
  status: "已核验",
  tags: ["超话", "后援会", "投票"],
  imageUrls: ["/images/example.jpg"]
}
```

## 如何放图

把图片文件放进：

```text
public/images/
```

例如你放了一张：

```text
public/images/2026-07-21-yushi.jpg
```

就在 `data/updates.ts` 对应动态里写：

```ts
imageUrls: ["/images/2026-07-21-yushi.jpg"]
```

多张图：

```ts
imageUrls: [
  "/images/2026-07-21-yushi-1.jpg",
  "/images/2026-07-21-yushi-2.jpg"
]
```

正式上线前建议只放官方图、授权图或你自己有权使用的图；粉丝图、站姐图和小红书/微博原图要谨慎。

## 本地运行

```bash
npm install
npm run dev
```

打开：

```text
http://localhost:3000
```

## 部署到 Vercel

1. 新建一个 GitHub 仓库，例如 `yushi-dynamics`。
2. 把本目录代码推上去。
3. 打开 [Vercel](https://vercel.com)，选择 `Add New Project`。
4. 导入 GitHub 仓库。
5. Framework Preset 选择 `Next.js`。
6. Build Command 使用默认值：

```bash
npm run build
```

7. Deploy。

部署成功后，每次你更新 `data/updates.ts` 并推送到 GitHub，Vercel 会自动重新发布。

## 第二步怎么升级

当本地数据跑顺后，再加：

- Supabase：把 `data/updates.ts` 换成数据库。
- 管理后台：用表单录入标题、摘要、来源、图片。
- AI 摘要：粘贴微博/小红书链接后，自动生成摘要和标签。
- 图片存储：用 Cloudflare R2 或 Supabase Storage。

## 内容规则

- 只收录公开信息。
- 不发布未公开行程、酒店、航班、住址等隐私信息。
- 图片尽量使用授权图、官方图或只放来源链接。
- 粉丝内容标记为 `C 粉丝内容` 或 `待核验`。
