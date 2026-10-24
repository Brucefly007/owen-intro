export const profile = {
  name: "Owen",
  role: "AI 应用开发工程师",
  intent: "大模型应用 · Agent · RAG",
  email: "tianaowork@163.com",
  emailHref: "mailto:tianaowork@163.com",
  github: "github.com/Brucefly007",
  githubHref: "https://github.com/Brucefly007",
  lede:
    "四个项目全部独立完成：从产业带箱包商家的客服痛点做出第一版自动客服，再工程化成带评测体系的知识库平台，接着做了 MCP 工具网关与 Agent 编排。",
} as const;

export const nav = [
  { href: "#hero", label: "关于" },
  { href: "#about", label: "简历" },
  { href: "#work", label: "作品" },
  { href: "#contact", label: "联系" },
] as const;

export const about = {
  paragraphs: [
    "项目驱动型的自学者，从真实需求出发做技术。四个项目全部独立完成，而且连成一条线：从产业带箱包商家的客服痛点做出第一版自动客服，再工程化成带完整评测体系的知识库平台，接着做了 MCP 工具网关与 Agent 编排。",
    "用数据验收，不靠感觉。检索看 Recall@K / MRR，生成看准确率与格式合规率，服务看首字延迟与并发承载。习惯先手写核心逻辑再用框架——先自己实现混合检索与 RRF，再对照 LangChain 的封装——因此框架出问题能定位到具体层次。",
  ],
  pull: "用数据验收，不靠感觉。",
} as const;

export const stats = [
  { value: "99.2%", label: "工具调用成功率" },
  { value: "0.89", label: "RAG Recall@5" },
  { value: "约 84%", label: "常见问题准确率" },
  { value: "600–700", label: "采集请求 / 秒" },
] as const;

export const skillGroups = [
  {
    title: "编程语言",
    body: "Python（熟练）——异步 asyncio、类型注解、依赖管理；C# 有完整项目经验；Java / Go 可读懂并做简单开发。",
  },
  {
    title: "大模型应用",
    body: "大模型 API（OpenAI / DeepSeek / 通义 / Claude）；Prompt 工程（角色设定、Few-shot、CoT、格式约束）、Function Calling、结构化输出（JSON Schema）、流式 SSE、多轮上下文管理与压缩。",
  },
  {
    title: "Agent 与编排",
    body: "LangChain、LangGraph、LlamaIndex、Dify；多 Agent 协作、ReAct 与状态机编排、SKILL / MCP 工具体系。",
  },
  {
    title: "RAG 与向量库",
    body: "Milvus / Qdrant / Chroma / pgvector；Embedding（BGE-M3）、稠密 + 稀疏混合检索、Rerank 精排、分块策略、元数据过滤、检索评测（Recall@K / MRR）。",
  },
  {
    title: "后端与工程",
    body: "FastAPI / Flask；MySQL / PostgreSQL 建表索引与慢查询优化；Redis 缓存与会话；Kafka / RabbitMQ；Docker / Nginx、Linux、Git。",
  },
  {
    title: "工程化与可观测",
    body: "pytest 单测与接口测试、CI/CD；结构化日志与链路追踪（Langfuse / LangSmith）；性能压测与延迟优化（首 token 延迟、并发承载、缓存命中率）。",
  },
] as const;

export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  filters: string[];
  period: string;
  stack: string[];
  summary: string;
  points: string[];
  metric: { value: string; unit: string; note: string };
  href?: string;
  linkLabel?: string;
  footnote: string;
};

export const projects: Project[] = [
  {
    id: "mcp-gateway",
    index: "01",
    title: "MCP 工具网关与 Agent 工具调用",
    category: "Agent",
    filters: ["Agent"],
    period: "2026.10",
    stack: ["Python", "MCP", "LangGraph"],
    summary:
      "手写 MCP Server（stdio / SSE 双传输），把 MySQL 查询、HTTP 接口、文件检索封装为 9 个标准工具，可被 Claude Desktop、Cursor 与自研 Agent 直接复用。",
    points: [
      "安全边界自己守：SQL 仅允许 SELECT 并自动补 LIMIT，HTTP 加域名白名单防 Prompt 注入诱导访问内网（SSRF），检索限定目录，敏感操作留审计日志。",
      "编排用 LangGraph 状态机，而不是裸 ReAct。五个节点：分流 → 补全 → 工具调用 → 校验 → 回复 / 转人工。节点是纯函数，可单独单测，检查点支持失败回放。",
      "只读操作指数退避，写操作加幂等键，全部工具设超时与最大步数。故障注入（超时 / 429 / 非法参数）后，工具调用成功率由 88% 提升至 99.2%。Prompt 评测用规则校验 + LLM-as-Judge，接入 CI。",
    ],
    metric: { value: "99.2%", unit: "工具成功率", note: "88% → 99.2%" },
    href: "https://github.com/Brucefly007/mcp-gateway",
    linkLabel: "开源代码",
    footnote: "个人项目 · 代码与评测脚本已开源",
  },
  {
    id: "rag-kb",
    index: "02",
    title: "企业级 RAG 知识库问答平台",
    category: "RAG",
    filters: ["RAG"],
    period: "2026.09 – 2026.10",
    stack: ["Python", "FastAPI", "Milvus"],
    summary:
      "从文档解析、清洗分块、向量化入库，到混合检索、Rerank、流式问答与引用溯源，整条链路自己实现，没有套用现成问答模板。",
    points: [
      "分块改为标题层级 + 语义切分（chunk 512 / overlap 64，表格单独成块并跨行保留表头）。召回用 BGE-M3 稠密 + BM25 稀疏，RRF 融合后由 bge-reranker-v2 精排取 Top-5。",
      "人工标注 200 条评测集（含 20% 无答案）。Recall@5：纯向量 0.62 / 纯 BM25 0.58 / 混合 0.81 / 混合 + Rerank 0.89。MRR 由 0.51 提升至 0.78。评测接入 CI，指标下降即拦截。",
      "口语化与多跳提问加入查询改写和问题分解，且只在复杂问题上启用。多跳类问题正确率由 41% 提升至 72%。FastAPI + SSE，Redis 会话与语义缓存，Docker Compose 一键启动。",
    ],
    metric: { value: "0.89", unit: "Recall@5", note: "MRR 0.51 → 0.78" },
    href: "https://github.com/Brucefly007/rag-knowledge-base",
    linkLabel: "开源代码",
    footnote: "个人项目 · 代码与评测脚本已开源",
  },
  {
    id: "bag-cs",
    index: "03",
    title: "箱包电商智能客服",
    category: "交付",
    filters: ["RAG", "交付"],
    period: "2026.09",
    stack: ["大模型 API", "RAG"],
    summary:
      "为产业带上 2 家箱包店铺搭建基于大模型 API + 知识库检索的自动客服，回答尺码、材质、库存、发货时效和退换政策，并带引用来源供商家核对。",
    points: [
      "收集整理 2 家店铺共 180 余条真实咨询资料建成知识库，标注 60 条评测集。常见问题回答准确率约 84%，商家反馈重复问题处理时间下降约六成。",
      "这是后来那套知识库平台的原型。分块切碎、召回不准这些问题的真实影响，是在这个项目上第一次碰到的。",
    ],
    metric: { value: "约 84%", unit: "常见问题准确率", note: "处理时间约 −60%" },
    footnote: "个人实践 · 产业带商家交付，可现场演示",
  },
  {
    id: "collector",
    index: "04",
    title: "高并发数据采集与统计工具",
    category: "工程",
    filters: ["工程"],
    period: "2025.01 – 2025.02",
    stack: ["C#", ".NET 8", "WPF"],
    summary:
      "基于 C# / .NET 8 + WPF 的高并发采集客户端。异步 Task 调度配合连接池复用，单机处理能力 600–700 请求/秒。",
    points: [
      "这个项目把连接复用、异步调度与背压学清楚了。后来做 AI 服务性能优化时，直接复用了这套认识。",
    ],
    metric: { value: "600–700", unit: "请求 / 秒", note: "单机 · 连接池复用" },
    footnote: "个人项目 · 未单独开源",
  },
];
