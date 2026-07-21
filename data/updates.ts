export type UpdateItem = {
  id: string;
  title: string;
  summary: string;
  eventDate: string;
  platform: "微博" | "小红书" | "新闻" | "票务" | "品牌" | "其他";
  sourceName: string;
  sourceUrl: string;
  category: "本人动态" | "官方/后援会" | "活动行程" | "粉丝内容" | "待核验";
  credibility: "A 官方" | "B 媒体/平台索引" | "C 粉丝内容" | "待核验";
  status: "已核验" | "待核验";
  tags: string[];
  imageUrls?: string[];
};

export const updates: UpdateItem[] = [
  {
    id: "2026-07-20-fanclub-vote",
    title: "于适官方后援会发起超话投票",
    summary:
      "7月20日19:00起，后援会就“是否长期保留散粉站负责人对接权”发起投票，投票持续至7月22日19:00。",
    eventDate: "2026-07-20",
    platform: "微博",
    sourceName: "新浪微博公开索引",
    sourceUrl: "https://www.sina.cn/news/detail/5317682704680586.html",
    category: "官方/后援会",
    credibility: "B 媒体/平台索引",
    status: "已核验",
    tags: ["超话", "后援会", "投票"],
    imageUrls: []
  },
  {
    id: "2026-07-20-shanghai-concert",
    title: "「适诗」2026巡回演唱会上海站信息持续传播",
    summary:
      "上海站时间为7月25日至7月26日，地点为上海梅赛德斯-奔驰文化中心，7月20日前后相关票务与行程信息被集中转发。",
    eventDate: "2026-07-20",
    platform: "票务",
    sourceName: "公开新闻/票务索引",
    sourceUrl: "https://www.sina.cn/news/detail/5317682704680586.html",
    category: "活动行程",
    credibility: "B 媒体/平台索引",
    status: "已核验",
    tags: ["演唱会", "上海", "行程"],
    imageUrls: []
  },
  {
    id: "2026-07-20-88vip-ticketing",
    title: "88VIP超酷音乐盛典开票异常新闻提及于适",
    summary:
      "7月20日开票出现异常，官方称因人工配置失误，将于7月21日10:00重启预售；公开新闻阵容信息提及于适。",
    eventDate: "2026-07-20",
    platform: "新闻",
    sourceName: "搜狐新闻",
    sourceUrl: "https://www.sohu.com/a/1052474550_362225",
    category: "活动行程",
    credibility: "B 媒体/平台索引",
    status: "已核验",
    tags: ["音乐盛典", "票务", "活动"],
    imageUrls: []
  },
  {
    id: "2026-07-20-xhs-open-check",
    title: "小红书未核到本人公开新动态",
    summary:
      "公开搜索未核到于适本人于7月20日在小红书发布的新动态；如后续有原帖链接，可录入为待核验后再发布。",
    eventDate: "2026-07-20",
    platform: "小红书",
    sourceName: "公开搜索记录",
    sourceUrl: "",
    category: "待核验",
    credibility: "待核验",
    status: "待核验",
    tags: ["小红书", "待核验"],
    imageUrls: []
  },
  {
    id: "2026-07-21-example",
    title: "just 测试！just 测试！just 测试！just 测试！",
    summary: "这里写简短摘要。",
    eventDate: "2026-07-21",
    platform: "微博",
    sourceName: "来源名称",
    sourceUrl: "https://example.com",
    category: "活动行程",
    credibility: "B 媒体/平台索引",
    status: "已核验",
    tags: ["标签1", "标签2"],
    imageUrls: ["/images/yosh1.jpg"]
  }
];
