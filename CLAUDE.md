# CLAUDE.md

ユーザーとは日本語で会話をします。

## 🚨 CRITICAL: 手戻り防止の最重要原則

**⚠️ コンテキスト「節約」による究極の非効率を防ぐ**

**典型的な失敗パターン:**
1. コンテキスト節約目的で部分読み込み (limit/offset使用)
2. ↓ 不完全なファイル理解・パターン把握
3. ↓ ユーザー想定と異なるファイル作成
4. ↓ ユーザーによる全作業削除
5. ↓ **セッション全体が無駄 = 最大のコンテキスト浪費**

**🎯 効率化の真実:**
- **完全読み込み** → 正確理解 → 一発で正しいファイル = **真の効率**
- **部分読み込み** → 不正確理解 → 手戻り → **究極の非効率**

**📏 基本姿勢:**
- **「コンテキスト節約」より「手戻り防止」を最優先**
- **最初に完全理解** → 後の作業が確実
- **曖昧理解での作業開始** → セッション全体が無駄になる可能性

**REMEMBER**: 1回の完全読み込み < セッション全体やり直しのコスト

---

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **G-Test Note** learning website - a minimal, brutalist-designed static site for G検定 (JDLA Deep Learning for GENERAL) certification study. The project is focused on creating a simple, distraction-free learning platform using only HTML, CSS, and Vanilla JavaScript.

## Architecture & Design Principles

### Technology Stack
- **HTML5**: Semantic markup only
- **CSS3**: Grid/Flexbox layouts with brutalist design
- **Vanilla JavaScript**: Markdown loading and table of contents generation
- **Static hosting**: Designed for GitHub Pages deployment

### Design Philosophy
- **Brutalism**: Function-first design with thick black borders, no gradients/transparency/rounded corners
- **Color Restriction**: Only use specified palette colors (#2a2a2a, #ffffff, #000000, CMY colors)
- **Minimalism**: Learning-focused, distraction-free interface
- **CMY Color Scheme**: Chapter-based color coding (Cyan: Ch.1-3, Magenta: Ch.4-6, Yellow: Ch.7-9)
- **Typography**: Inter for body text, JetBrains Mono for headings/code
- **Consistency**: Unified design rules across all pages

### File Structure
**IMPORTANT**: Claude Code must ALWAYS check the current file structure first using LS tool (Windows environment). 
The final folder structure organization will be handled by humans. Claude Code should NOT reorganize folders.
Current structure varies - always confirm before working.

## Development Guidelines

### Core Requirements
- **No frameworks**: React, Vue, etc. are explicitly forbidden
- **No complex state management**: Page-based navigation only
- **No external APIs**: Self-contained learning platform
- **No databases**: Static content only

### Essential Features
- **Responsive design**: Desktop (768px+) with sidebar, Mobile with hamburger menu
- **Markdown processing**: Dynamic content loading from .md files
- **Table of contents**: Auto-generated from markdown headings
- **Smooth scrolling**: Chapter navigation within pages
- **Chapter color theming**: Automatic color application based on chapter number

### Content Management
- **Markdown structure**: H1-H3 hierarchy with syntax highlighting
- **Image handling**: PNG/JPG with black borders, responsive sizing
- **Study materials**: G検定 exam questions and explanations in Japanese

## Project Context

This is a **study support tool** for the JDLA G検定 (Deep Learning for General) certification exam. The content includes:
- AI fundamentals and history
- Machine learning concepts
- Deep learning techniques
- Ethics and legal considerations
- Mathematical foundations

## Development Notes & Role Division

### Claude Code's PRIMARY ROLE
**MAIN TASK**: Create study pages (studyX-X.html) following strict syllabus compliance
- **Syllabus Source**: `C:\Users\interscience\kaihatu\mypublic2025\2025_g_test\old\G検定シラバス2024～.md`
- **Start from**: Continue from study1-1.html onwards
- **Style Consistency**: MUST follow same format/style as existing files
- **Content Source**: ONLY from official syllabus - NO original content

### Human's Role
- **Final folder structure organization** (GitHub Pages /docs structure, etc.)
- **File quality checking** - existing files are already approved
- **Project deployment and hosting setup**

### Critical Rules for Claude Code
1. **NO refactoring of existing files** - they are already approved
2. **NO folder reorganization** - humans will handle this
3. **NO creative content** - strictly syllabus-based only
4. **ALWAYS check existing file patterns first** before creating new files
5. **Follow established style patterns exactly**
6. **🚨 MANDATORY: Read files COMPLETELY when analyzing/referencing** - NO limit/offset parameters

### Focus Areas
- Learning experience optimization through consistent study page creation
- Japanese language support for G検定 exam preparation
- Strict adherence to existing design patterns and content structure

## 🪟 CRITICAL: Windows Environment Requirements

**⚠️ MANDATORY**: This project is developed on **Windows** environment. Claude Code MUST follow these rules:

### Tool Usage in Windows Environment
- **LS tool**: Designed for Windows - use this for directory listing (NOT bash commands)
- **Read/Write/Edit tools**: Use these for file operations (NOT bash commands)
- **Glob/Grep tools**: Use these for file searching (NOT bash commands)
- **Path format**: Always use Windows backslashes (`C:\Users\...`)

### 🚫 PROHIBITED Commands (WILL CAUSE ERRORS)
- **NEVER use bash commands**: `ls`, `cat`, `cp`, `mv`, `rm`, `grep`, `find`
- **NEVER use Unix paths**: `/path/to/file` (use `C:\path\to\file`)
- **NEVER assume Unix environment**: All commands must be Windows-compatible

### ✅ CORRECT Tool Usage for Common Tasks
- **List files**: Use `LS` tool (not `bash ls` or `bash dir`)
- **Read files**: Use `Read` tool (not `bash cat` or `bash type`)
- **Search files**: Use `Glob` or `Grep` tools (not `bash find` or `bash grep`)
- **Edit files**: Use `Edit` or `MultiEdit` tools (not bash text editors)

### File Path Standards
- **Absolute paths**: `C:\Users\interscience\kaihatu\mypublic2025\2025_g_test\...`
- **Backslashes only**: Use `\` not `/`
- **Quote paths with spaces**: `"C:\Users\user name\folder"`
- **Case sensitivity**: Windows is case-insensitive but maintain consistent casing

### 🎯 Project-Specific Windows Paths
- **Syllabus file**: `C:\Users\interscience\kaihatu\mypublic2025\2025_g_test\old\G検定シラバス2024～.md`
- **Study files**: `C:\Users\interscience\kaihatu\mypublic2025\2025_g_test\studyX-X.html`
- **CSS file**: `C:\Users\interscience\kaihatu\mypublic2025\2025_g_test\assets\css\style.css`

**REMEMBER**: Using wrong commands will result in immediate failure and project rejection!

## Prohibited Additions
- Progress tracking systems
- User authentication
- Interactive quizzes beyond static content
- Complex animations
- Third-party service integrations
- Database connections

# 🔥 MANDATORY PRE-WORK CHECKLIST (絶対に守るべき作業手順)

## ⚠️ CRITICAL: These steps MUST be completed BEFORE creating any new study page

### STEP 1: 既存ファイル参照確認 (NEVER SKIP)
**BEFORE creating any studyX-X.html file:**
1. **Read at least 2 existing study files** in the same chapter range **COMPLETELY (NO limit parameter)**
2. **Copy the exact structure** and patterns used
3. **Note the content format**: シラバス対応ボックス, 数式, 試験対策セクション, 用語集
4. **Check navigation patterns**: Back/Next button styles and colors (often at the bottom!)

**Example**: Before creating study4-1.html, READ study3-1.html and study3-2.html

**⚠️ CRITICAL FILE READING RULE**:
- **ALWAYS read COMPLETE files** when analyzing, referencing, or checking patterns
- **NEVER use limit/offset parameters** when reading reference files
- **Check from header to footer** - navigation elements are often at the bottom
- **Missing footer/navigation = immediate work rejection**

**📋 SCENARIOS REQUIRING COMPLETE FILE READ (NO EXCEPTIONS):**
1. **Pattern analysis**: Understanding existing file structure
2. **Reference checking**: Before creating new study pages
3. **Template validation**: Ensuring template matches reality
4. **Navigation verification**: Footer elements are critical
5. **Style consistency**: Color patterns, formatting throughout entire file
6. **First-time file analysis**: Initial understanding of any file
7. **Problem investigation**: When user reports issues

**✅ ONLY use limit/offset for:**
- Very long logs or data files (not HTML study pages)
- Quick content preview (not pattern analysis)
- Debugging specific sections (after complete read first)

### STEP 2: CSS確認 (NEVER CREATE NEW CLASSES)
**BEFORE adding any CSS class:**
1. **Read `assets/css/style.css` completely**
2. **Use ONLY existing classes**
3. **NEVER create new CSS classes**
4. **If class doesn't exist, use inline styles or ask user**

**章別CSSクラスと色 (MEMORIZE THIS):**
- **Chapter 1-3**: `chapter-cyan` class (自動的に #00ffff color)
- **Chapter 4-6**: `chapter-yellow` class (自動的に #ffff00 color)  
- **Chapter 7-9**: `chapter-magenta` class (自動的に #ff00ff color)

**IMPORTANT**: CSSクラスを指定すれば、対応する色が自動適用されます！

### STEP 3: シラバス準拠確認 (NO ORIGINAL CONTENT)
**BEFORE writing any content:**
1. **Read `C:\Users\interscience\kaihatu\mypublic2025\2025_g_test\old\G検定シラバス2024～.md` for the specific chapter**
2. **Copy the exact 目標 and キーワード from syllabus**
3. **Write content ONLY based on syllabus requirements**
4. **NO original content, NO creative additions**
5. **Focus on exam-specific points mentioned in syllabus**

### STEP 4: ナビゲーション一貫性確認 (MANDATORY PATTERN)
**Navigation MUST follow this exact pattern:**
```html
<nav class="page-nav" style="border-top: 3px solid #000000; padding-top: 40px; margin-top: 40px;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
        <a href="[PREV].html" style="color: #ffffff; text-decoration: none; border: 3px solid #000000; padding: 15px 20px; text-transform: uppercase; font-weight: 600; transition: all 0.2s ease;">
            <i class="fas fa-chevron-left" style="margin-right: 8px; color: [CHAPTER_COLOR];"></i>
            Back: [PREV_NUMBER]
        </a>
        <a href="[NEXT].html" style="color: #ffffff; text-decoration: none; border: 3px solid #000000; padding: 15px 20px; text-transform: uppercase; font-weight: 600; transition: all 0.2s ease;">
            Next: [NEXT_NUMBER]
            <i class="fas fa-chevron-right" style="margin-left: 8px; color: [CHAPTER_COLOR];"></i>
        </a>
    </div>
</nav>
```

**Chapter class names and automatic colors:**
- Chapter 1-3: `chapter-cyan` → `#00ffff` (cyan)
- Chapter 4-6: `chapter-yellow` → `#ffff00` (yellow)  
- Chapter 7-9: `chapter-magenta` → `#ff00ff` (magenta)

**CRITICAL**: 正しいクラス名を使用すれば色は自動適用！

### STEP 5: Template確認 (USE EXACT REPLACEMENTS)
**Use `study-template-css-unified.html` (CSS完全統一版) and replace:**
- `[CHAPTER_CLASS]` → `chapter-cyan` (Ch.1-3), `chapter-yellow` (Ch.4-6), or `chapter-magenta` (Ch.7-9)
- `[CHAPTER_NUMBER]` → `Chapter 4-1`, `Chapter 4-2`, etc.
- `[CHAPTER_TITLE]` → Exact title from syllabus
- `[PREV_CHAPTER]` / `[NEXT_CHAPTER]` → Correct file names

**🎯 CSS完全統一の利点:**
- インライン色指定完全撤廃（`style="color: #ffff00;"` 等の使用禁止）
- CSSクラスによる自動色適用（`color: inherit;` 使用）
- 前任者の色間違いを根本的に防止
- 色変更が1箇所（CSS）で完結

## ❌ VIOLATION CONSEQUENCES
**If you skip any of these steps:**
- User will notice immediately
- All work will be rejected
- You will need to start over
- This wastes everyone's time

**⚠️ SPECIFIC VIOLATIONS THAT CAUSE IMMEDIATE REJECTION:**
- Reading files with limit/offset parameters when analyzing patterns
- Missing footer navigation because you didn't read to the end
- Incomplete understanding of file structure due to partial reads
- Creating files that don't match existing patterns

## ✅ SUCCESS CRITERIA
**Your work is acceptable ONLY if:**
1. You referenced existing files first
2. You used only existing CSS classes
3. Content matches syllabus exactly
4. Navigation follows existing patterns
5. No original/creative content added

## 📝 Content Writing Guidelines

### シラバス対応ボックス (MANDATORY FORMAT)
```html
<div style="background-color: #1a1a1a; border: 3px solid #000000; padding: 20px; margin: 20px 0;">
    <h3 style="color: [CHAPTER_COLOR]; margin-top: 0;">📋 学習目標</h3>
    <p>[Copy exact 目標 from syllabus]</p>
    
    <h3 style="color: [CHAPTER_COLOR]; margin-top: 20px;">🔑 シラバス・キーワード</h3>
    <ul>
        <li><strong>[Copy each keyword from syllabus]</strong></li>
    </ul>
</div>
```

**[CHAPTER_COLOR] replacement (if manual color needed):**
- Chapter 1-3: `#00ffff`
- Chapter 4-6: `#ffff00`  
- Chapter 7-9: `#ff00ff`

**BUT USUALLY**: Just use correct chapter class and colors apply automatically!

### 試験対策セクション (MANDATORY SECTION)
```html
<h1 id="exam-focus">試験対策のポイント</h1>
<div style="background-color: #1a1a1a; border: 3px solid #000000; padding: 20px; margin: 20px 0;">
    <h3 style="color: [CHAPTER_COLOR]; margin-top: 0;">🎯 G検定で頻出する内容</h3>
    <!-- Add exam-specific points here -->
</div>

<h2 id="common-mistakes">よくある間違い</h2>
<div style="background-color: #1a1a1a; border: 3px solid #000000; padding: 20px; margin: 20px 0;">
    <h3 style="color: #ffffff; margin-top: 0;">❌ 注意すべきポイント</h3>
    <!-- Add common mistakes here -->
</div>
```

### 用語集 (MANDATORY SECTION)
```html
<h1 id="glossary">主な用語集</h1>
<h2 id="key-terms">重要用語</h2>
<dl style="margin: 20px 0;">
    <dt style="font-weight: bold; color: [CHAPTER_COLOR]; margin-top: 15px;">[Term]</dt>
    <dd style="margin-left: 20px; margin-bottom: 10px;">[Definition]</dd>
</dl>
```

**ALL [CHAPTER_COLOR] must be replaced with (if needed manually):**
- Chapter 1-3: `#00ffff`
- Chapter 4-6: `#ffff00`  
- Chapter 7-9: `#ff00ff`

**PREFERRED**: Use correct chapter class for automatic color application!

# REMEMBER: 
**This is a G検定 exam preparation site. Every piece of content must be exam-focused and syllabus-compliant. NO exceptions.**