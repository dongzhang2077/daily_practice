# 开发方向求职：岗位与作品集初步建议

日期：2026-11-06。先按加拿大、特别是大温地区判断。目标地区、毕业/可全职时间、此前本科专业和完整履历尚未确认。建议用于选择训练和投递方向，不代表已核验满足某个岗位全部要求。

**本日后续更新：本人进一步考虑前端、未来 Agent 应用开发，以及通过 freelance 积累真实经验，并明确多数旧项目由 AI 辅助完成，缺乏独立开发信心与项目掌控感。下文 Java 主线是此前依据项目积累给出的初步比较，不是已经选定的路线。最新建议见文末：优先尝试以亲手实现、可解释和可修改为目标的前端应用主线，是否正式采用仍待本人决定。**

## 推荐主线

优先定位为后端为重心的初级 Web / 业务应用开发候选人，以 Java / Spring Boot、SQL 和一个前端框架组织作品与训练。搜索岗位时覆盖 Junior Software Developer、Software Developer I、Associate Developer、Junior Backend Developer、Junior Java Developer、Junior Full Stack Developer 和 Application Developer；按实际职责、经验和学历要求判断，不仅看职位标题。

这是根据既有项目接触与可复用材料作出的路线推断，不是 Java、框架或完整交付能力已经熟练的结论。此前摸底主要观察了 JS 短函数，不能据此推定其他语言水平。AI 专项自学与求职方向按本人要求另行处理；今天只讨论开发岗位。

| 优先级 | 岗位方向 | 个人材料与主要缺口 |
| --- | --- | --- |
| 主攻 | 初级后端 / Java 业务应用开发 | 电商、NW Trails、LocalGuide 都有 Java 后端背景；需要亲自跑通 API、SQL、校验、权限、异常与测试的一条业务流程 |
| 同一主线拓展 | 初级全栈 / Web Application / Application Developer | 可用电商前后端、LocalGuide 的业务流程说明端到端交付；框架选择围绕具体目标岗位，不同时重学多个前端与后端栈 |
| 兴趣明确时作为第二方向 | 初级 Android / Kotlin 开发 | FitTrackPro 有直接项目材料；需用本人能解释和修改的 Kotlin、状态、异步、存储和真机验证建立证据。它是独立投递路线，不只是给 Web 简历增加技术名词 |

优先找有资深 Review、能给初级开发限定任务范围的业务应用团队。现有证据不足以给出岗位录用概率，也没有统计不同方向的岗位总量。

## 实际看过的个人材料

- 公开 [GitHub 主页](https://github.com/dongzhang2077)、可访问的仓库列表与项目说明。部分页面是缓存，不能将列表当作完整实时仓库清单；未完成全仓库代码、提交归属或人机贡献审计。
- [电商前端仓库](https://github.com/dongzhang2077/simple_e-commerce_store_fr) 的说明列出 React / TypeScript、Spring Boot、PostgreSQL 和认证、订单等业务。这里把它作为项目接触背景，未核验其中生产就绪或部署可用的声明；后端仓库正文在本次访问中不可获取。
- [NW Trails 后端](https://github.com/dongzhang2077/nw_trails_backend) 和 [FitTrackPro](https://github.com/dongzhang2077/FitTrackPro) 的公开页面。本地 FitTrackPro 最终报告列出 Kotlin、Compose、Room、Coroutines/Flow 等，属于报告声明，未在本次构建运行。
- 本地 [LocalGuide 最终报告](../5-SoftwareEngineering/proj/LocalGuide_Software-Engineering/docs/final/LocalGuide_FinalReport.md) 将 Dong Zhang 列为 Booking & Payment 模块负责人。报告中的技术栈是 Spring Boot / Vue / MySQL，支付与通知包含 stub，不应写成已完成真实生产支付。抽读了 BookingService、BookingServiceTest 和支付适配器文件分布；这些材料存在不等于全部由本人独立编写。
- 本地 [Theseus README](../6-AppliedResearchProject/theseus-weekly-review/README.md) 描述 FastAPI / React / SQLite 的团队课程系统。它可提供产品、API、持久化与测试的讲述材料；不将项目复杂度或 AI 集成直接认定为本人独立能力或 ML 训练经验。
- 当前 [实操摸底小结](ASSESSMENT_REPORT_2026-11-03.md) 及 11-04 的删除与验证记录。独立短函数能力、资料辅助实现和 AI 提供的验证仍分别记录。

GitHub 个人介绍自述有移动游戏设计背景。Co-op 笔记保留了游戏设计工作的面试叙事，但完整公司、职位、时间和职责没有核实；可作为待本人确认的业务理解与协作经历，不能改写成软件开发工作经验。

没有找到可读取的完整个人简历。GitHub 链接到 [LinkedIn 个人主页](https://www.linkedin.com/in/dong-zhang-cs2077b/)，但 LinkedIn 拒绝访问；本人提供的 /feed/ 也不是个人资料页。Honor 下存在 IBM 全栈、课程完成证书与 Dean's List 的文件，本次未逐份核验持有人、正文及有效期；AWS 目录中的学习笔记不能直接作为获证证明。

## 学历与岗位筛选

[加拿大 Job Bank](https://www.jobbank.gc.ca/marketreport/requirements/22548/ca) 的软件开发职业要求列出相关本科或相关 college 课程两类常见路径。这不保证每个雇主都接受同一种学历，也不能由学历单独推算求职结果。

本人最初称项目为 PBD。[Douglas 官方说明](https://www.douglascollege.ca/programs-and-courses/international-student-programs) 将两年 PBD 列为 post-degree 路径，入学要求包含已获得本科。如果本人确为此路径，简历需要准确列出原本本科和 PBD；原本科专业尚未知，不能把 PBD 写成 CS 本科，也不能自动判定满足特定 STEM 本科要求。

求职可同时覆盖 new grad 与普通 junior / associate 职位，逐项核对毕业窗口、是否要求仍在校、年限、工作地点与工作资格等实际条件。简历中课程和团队项目归到 Projects，真实非开发经历按原职位表达。

## 招聘样本：用于理解门槛，非录用承诺或完整市场统计

- [Adacado Entry-Level Developers](https://adacado.com/careers-entry-level-developer/)：温哥华办公室，要求有编程基础与个人项目，说明提供 FE / BE 指导；页面同时列出本科或 bootcamp 背景。技术栈不与现有 Java 线完全一致，可作为重视培养的岗位样本。页面未给明确发布时间，是否仍有名额需投递时确认。
- [Bells of Steel Junior Full-Stack Developer](https://ats.rippling.com/bells-of-steel-inc/jobs/99c68716-73a2-4af5-8438-c8fcd557e701)：招聘页明确欢迎 new grad，关注可演示、可解释、经过测试的应用；涉及 React Native/Expo、TypeScript、Postgres、移动数据和 AI 工具协作。本人的健身应用材料可能有主题关联，但该岗要求 Calgary 混合办公，且不是 Kotlin 岗，不能直接当作已匹配。
- [Amazon Vancouver Early Career 2026](https://www.amazon.jobs/en/jobs/10502743/software-development-engineer-early-career-2026)：明确列出相关本科及以上学历要求，项目经历可作为优选材料；是否符合要看原本专业与学历，不能仅凭 PBD 判断。可按资格和准备情况选择申请，不作为唯一投递渠道。
- [CGI Junior Full Stack Developer 的雇主发布内容](https://ca.linkedin.com/jobs/view/junior-full-stack-developer-at-cgi-4488104527)：列出 Java / Spring / React / SQL，同时要求 1–2 年 Java 经验和具体安全审查条件。这说明 Junior 标题并不等于零经验，需看正文，不把这种样本冒充无条件适合本人投递的机会。

AI 辅助开发出现在部分招聘要求中；作品集应展示本人如何理解、检验、修改并对交付负责。此前本人说过大量代码由 AI 生成，因此可以明确说明团队、模板和 AI 支持，再用本人后续完成的变更、测试与解释建立可验证贡献，不把整个仓库直接作为独立熟练度证明。

## 对作品集与训练的直接影响

先精选一个开发主项目，优先考虑 LocalGuide 中报告归属本人负责的预约模块，或能实际启动、本人最愿意继续维护的电商流程。项目选择仍需本人确认，不擅自选定、重写、发布或修改现有仓库。

第一阶段围绕一条真实用户流程留下：可运行演示、明确输入与错误行为、本人实现的变更、有效测试、个人贡献说明。能说明业务规则、数据库关系、权限边界和一个失败场景，形成对应岗位的具体证据。支付 stub 等限制需要如实标注。

训练逐步加入 Java / Spring / SQL 和前后端交互，保留忙碌日五分钟的小改进；只做 JS 数组题不能直接覆盖这条求职路线。AI 专项课程不并入本次 Coding 预算，AI 继续承担导师与 Reviewer 角色，核心实现由本人完成。完整简历、原本科与求职地区补齐后，再细化雇主与项目排序，不因此延长已结束的基础摸底。

## 本人补充后的方向调整：前端、掌控感与真实交付

本人考虑前端可能更容易入职，未来再连接 Agent 应用开发；也希望在找全职开发工作的同时，通过 freelance 增加经验并如实展示在 LinkedIn。本人强调能力是核心，旧项目大量借助 AI，导致对独立实现、项目理解和控制缺乏信心。

最新建议是把前端为主的 Web 应用开发作为可以优先试跑的路线，依据是可见的交互反馈、已有 Web 项目背景、潜在的小型客户需求，以及未来 Agent 产品界面的可复用能力。尚未观察本人是否喜欢布局、样式、浏览器行为与交互调试；不根据其希望前端更容易而宣称该路线录用概率更高。此前 Java 建议基于可复用项目较多，可以保留为背景，不要求同时训练多个主栈。

[Job Bank 的 BC 职业展望](https://bc.jobbank.gc.ca/marketreport/outlook-occupation/296888/BC%3Bjsessionid%3D192FCD9C3CB7463836BA3409EE32B2E6.jobsearch77) 把 Web developers and programmers（NOC 21234）2025–2027 整体展望列为 Moderate；这是职业组整体数据，不能推出 new grad 前端比后端容易入职。[Xsolla Montreal Junior Frontend 职位](https://jobs.lever.co/xsolla/a71646ad-6ac5-4103-b68c-3d399fc10b35) 接受较扎实的个人或开源项目计入经验，同时要求 JS、HTML/CSS、React/TypeScript、响应式布局、API、Git 和测试接触；地点为 Montreal 混合办公。该例用于说明门槛及已有游戏/电商背景可能的关联，不代表本人已经符合，也不是大温职位。

项目训练围绕一条本人负责的用户行为推进，逐步观察：能解释事件到状态和界面的变化；能亲自修改一个需求；能提出并验证故障假设；能写一条有效检查。允许文档、搜索与分级提示，保留完整参考帮助记录。AI 不先生成整套业务实现再让本人阅读验收，不要求背全部语法，也不把能解释 AI 代码等同于能够自行重建。

可供下一轮采用的起点是一个小前端应用的一条完整交互，例如填写记录、提交后显示、刷新后仍保留；它是建设性训练，不重开摸底。HTML/CSS/JS、DOM/事件、状态和异步的具体缺口在过程中补，之后按采用的项目逐步使用 React/TypeScript。尚未指定项目、框架或本轮时长，也没有创建业务实现。

未来 Agent 应用可以复用界面、状态、请求和结果展示，但仍需学习服务端、持久化、权限及工具调用等工程环节；不把前端熟练等同于已胜任 Agent 开发。AI 专项自学继续按本人要求与当前 Coding 预算分开。

Freelance 可以形成实际项目经验，开始时选择本人已经能够完成并维护的小页面、交互修复或明确范围的 API 展示功能。除了编码，还需界定需求、约定验收、沟通修改与交接；不能默认它比受指导的初级全职岗位更容易。积累项目时保留真实需求、本人贡献、演示、验证和客户验收；只做自用练习则按个人项目展示。实际对外服务可如实标为 Freelance / Self-employed / Contract；无偿项目按志愿或 pro bono 情况说明。[LinkedIn 官方帮助](https://www.linkedin.com/help/linkedin/answer/a1439550) 提供相应任职类型字段，不代表加入该标签就产生真实工作经历。
