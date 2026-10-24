"use client";

import { useState } from "react";
import { projectFilters, projects } from "@/lib/content";

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("全部");
  const visible = projects.filter(
    (project) => filter === "全部" || project.filters.includes(filter),
  );

  return (
    <section className="work" id="work">
      <div className="wrap">
        <div className="work__head">
          <h2 className="section-title">
            <span className="section-index">03 — 作品</span>
            作品
            <br />
            档案。
          </h2>
          <p className="work__meta">
            <b>ARCHIVE // 2025 — 2026</b>
            <br />
            SELECTED PROJECTS · 04
            <br />
            需求 → 编码 → 评测 → 部署，全部独立完成
          </p>
        </div>
        <div className="filters" role="toolbar" aria-label="筛选作品">
          {projectFilters.map((item, index) => (
            <span key={item} className="contents">
              {index > 0 ? <span className="sep">/</span> : null}
              <button
                type="button"
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            </span>
          ))}
        </div>
        <div>
          {visible.map((project) => (
            <article className="project" id={project.id} key={project.id}>
              <div className="project__index">{project.index}</div>
              <div>
                <div className="project__meta">
                  <span className="project__tag">{project.category}</span>
                  <span>{project.period}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project__summary">{project.summary}</p>
                <ul className="project__points">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <ul className="chips">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="project__foot">
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noopener noreferrer">
                      {project.linkLabel} →
                    </a>
                  ) : null}
                  <span>{project.footnote}</span>
                </div>
              </div>
              <aside className="metric" aria-label={`${project.title}指标`}>
                <span>METRIC</span>
                <b>{project.metric.value}</b>
                <span>{project.metric.unit}</span>
                <small>{project.metric.note}</small>
              </aside>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
