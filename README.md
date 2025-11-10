# WRIT 20833 Portfolio Template

**"When Coding Meets Culture" Final Project Template**

This template provides everything you need to create a professional web portfolio for your digital humanities research project. Perfect for showcasing your text analysis, sentiment analysis, and topic modeling work with data visualizations and critical reflection.

---

## Quick Start (No Command Line Required!)

**Never used command line? No problem!** See [WEB_WORKFLOW.md](WEB_WORKFLOW.md) for a complete step-by-step guide with screenshots.

### Use as GitHub Template (Recommended)

**All editing happens in your web browser - no downloads needed!**

1. **Click "Use this template"** button at top of this repository (green button)
2. **Create your repository:**
   - Name it: `your-project-name` (use hyphens, all lowercase)
   - Description: Your project title in plain English
   - Make it **Public** (required for GitHub Pages)
   - Click **"Create repository from template"**
3. **Add group members as collaborators (if working in groups):**
   - Go to Settings → Collaborators
   - Click "Add people"
   - Enter their GitHub usernames
4. **Edit files directly on GitHub:**
   - Click `index.html` in your repository
   - Click the ✏️ (pencil) icon to edit
   - Make your changes
   - Scroll down and click "Commit changes"
5. **Upload visualizations:**
   - Click into `images/` folder
   - Click "Add file" → "Upload files"
   - Drag PNG files from your computer
   - Click "Commit changes"

### Alternative: Download and Edit Locally

If you prefer to edit files on your computer (with VS Code or other text editor):

1. **Click "Use this template"** (same as above)
2. **Download your repository:**
   - Click the green "Code" button
   - Select "Download ZIP"
   - Extract to your computer
3. **Edit files** in VS Code or any text editor
4. **Upload changes back to GitHub:**
   - Go to your repository on GitHub
   - Click "Add file" → "Upload files"
   - Drag edited `index.html` and any new images
   - Click "Commit changes"

---

## What's Included

```
portfolio-template/
├── index.html              ← Complete HTML template with TODO markers
├── css/
│   └── styles.css          ← Professional CSS (TCU colors, fully responsive)
├── images/                 ← Place your PNG visualizations here
│   └── .gitkeep           ← Placeholder file
├── README.md               ← This file (you can replace with project-specific README)
├── QUICK_START.md          ← 5-minute setup guide
└── .gitignore              ← Ignore temporary files
```

---

## Step-by-Step Customization

### Step 1: Edit HTML Content

Open `index.html` in your text editor (VS Code recommended) and look for `<!-- TODO: ... -->` comments. These mark exactly where to add your content.

**Quick Find & Replace:**
- `Your Name` → Your actual name (or "Team Name")
- `Your Project Title` → Your research project title
- `yourusername` → Your GitHub username (in footer)
- `project-name` → Your repository name (in footer)

### Step 2: Fill in Each Section

| Section | What to Include |
|---------|-----------------|
| **Research Question** | Your research question + why it matters + background context |
| **Data & Methods** | Dataset source, collection method (Instant Data Scraper, API, etc.), sample size, ethical considerations, tools used (Python, VADER, Gensim) |
| **Results & Analysis** | Visualizations, code examples, sentiment analysis findings, topic modeling results |
| **Key Findings** | 3-5 numbered discoveries with supporting data, results tables, what surprised you |
| **Critical Reflection** | How computational + interpretive methods work together, connections to course frameworks (Classification Logic, AI Agency, etc.), limitations, future research |

### Step 3: Add Your Visualizations

1. **Export charts from Jupyter** as PNG files (see code example below)
2. **Save PNG files** in the `images/` folder
3. **Update image paths** in `index.html` to match your filenames

**Example: Exporting from Jupyter**

```python
import matplotlib.pyplot as plt

# Create your visualization
plt.figure(figsize=(10, 6))
# ... your plotting code ...

# Save as PNG
plt.savefig('sentiment-distribution.png', dpi=300, bbox_inches='tight')
plt.show()

# Then move the PNG file to your portfolio-template/images/ folder
```

### Step 4: Include Code Examples

The template includes styled code blocks. Copy relevant Python code from your notebooks:

```html
<div class="code-title">sentiment_analysis.py</div>
<pre><code>from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

analyzer = SentimentIntensityAnalyzer()
df['compound'] = df['text'].apply(
    lambda x: analyzer.polarity_scores(x)['compound']
)</code></pre>
```

### Step 5: Connect to Critical Frameworks

Use the special callout boxes to connect your work to course frameworks:

```html
<div class="framework-callout">
    <h3>📐 Classification Logic</h3>
    <p>This project demonstrates how algorithmic categorization...</p>
</div>
```

**Framework Options:**
- **📐 Classification Logic** - How algorithms categorize culture
- **🤖 AI Agency** - Power structures and pseudo-intelligence
- **🔒 Sacred Boundaries** - Privacy, ethics, digital divides
- **📚 Collective Memory** - Cultural preservation, digital archives

---

## Deploy to GitHub Pages

Make your portfolio publicly accessible in 3 steps:

1. **Go to repository Settings → Pages** (left sidebar)
2. **Source:** Select "Deploy from a branch"
3. **Branch:** Select `main` (or `master`), folder: `/ (root)`
4. **Click Save**
5. **Wait 1-2 minutes**, then visit: `https://YOUR-USERNAME.github.io/your-project-name`

**Troubleshooting:**
- Make sure repository is **Public** (Settings → General)
- Check that `index.html` is in the root directory (not in a subfolder)
- Allow 1-2 minutes for first deployment
- Refresh browser cache (Ctrl+Shift+R or Cmd+Shift+R)

---

## Working as a Group

### Web-Based Workflow (No Command Line!)

**Recommended approach for editing directly on GitHub:**

1. **One person creates the repository** from this template
2. **Add all group members** as collaborators:
   - Settings → Collaborators → Add people
   - Enter their GitHub usernames
3. **Divide sections** (coordinate who edits what):
   - Person A: Research Question, Data & Methods
   - Person B: Results & Analysis, visualizations
   - Person C: Key Findings, Critical Reflection
4. **Each person edits on GitHub:**
   - Click `index.html` → Click ✏️ (pencil icon)
   - Edit your section
   - Add commit message like "Add data and methods section"
   - Click "Commit changes"
5. **Avoid editing simultaneously:**
   - **Important:** Don't edit the same file at the same time!
   - Coordinate on Slack/text: "I'm editing the Research Question now"
   - Refresh the page before editing to see latest changes
6. **Upload images:**
   - Go to `images/` folder
   - Click "Add file" → "Upload files"
   - Add commit message like "Add sentiment analysis chart"

### Handling Conflicts

If you both edit at the same time, you might see an error:

**Solution 1: Take turns**
- Communicate before editing: "I'm working on the Methods section now"
- Wait for teammate to commit before you start editing

**Solution 2: Work in separate files**
- One person creates `draft.md` with their content
- Main editor copies content into `index.html` later

**Solution 3: Download and merge manually**
- Download both versions
- Copy/paste sections together in text editor
- Upload merged version

### Local Editing Workflow (Optional)

If your group prefers to edit locally with VS Code:

1. **Each person downloads** repository as ZIP (Code → Download ZIP)
2. **Edit your section** in your local file
3. **Coordinate before uploading:**
   - "I'm uploading the Research Question section now"
4. **Upload via GitHub web:**
   - Add file → Upload files
   - Drag `index.html`
   - Commit changes

**Tip:** Keep communication open - conflicts happen when two people upload different versions of the same file!

---

## Template Features (Already Built In)

### Visual Design
- ✅ **TCU Purple color scheme** (customizable in CSS)
- ✅ **Responsive design** - Works on desktop, tablet, mobile
- ✅ **Sticky navigation** - Menu stays visible while scrolling
- ✅ **Smooth scrolling** - Anchor links animate smoothly
- ✅ **Professional typography** - System fonts for fast loading

### Technical Features
- ✅ **Semantic HTML5** - Proper structure for accessibility
- ✅ **Code syntax highlighting** - Dark theme for Python code
- ✅ **Image optimization** - Responsive images with captions
- ✅ **Data tables** - Formatted results tables with highlighting
- ✅ **Print-friendly** - Portfolio prints nicely for PDF export
- ✅ **Framework callouts** - Special styling for critical reflections

### No Configuration Needed
- ✅ **CSS is complete** - No styling knowledge required
- ✅ **HTML structure is done** - Just fill in content
- ✅ **Mobile responsive** - Automatically adapts to screen size
- ✅ **Browser compatible** - Works in all modern browsers

---

## Customization (Optional)

### Change Color Scheme

Edit `css/styles.css` at the top:

```css
:root {
    --primary-color: #4d1979;      /* Main color (currently TCU Purple) */
    --secondary-color: #7c3aed;    /* Accent color */
    --accent-color: #ffd700;       /* Highlight color (currently gold) */
}
```

Try these color schemes:
- **Blue Academia:** `#1e3a8a`, `#3b82f6`, `#fbbf24`
- **Green Digital:** `#065f46`, `#10b981`, `#f59e0b`
- **Red Critical:** `#7f1d1d`, `#ef4444`, `#fcd34d`

### Add More Sections

Copy existing section structure:

```html
<section id="new-section">
    <h2>New Section Title</h2>
    <p>Your content here...</p>
</section>
```

Don't forget to add navigation link:

```html
<nav>
    <ul>
        <!-- existing links -->
        <li><a href="#new-section">New Section</a></li>
    </ul>
</nav>
```

## Content Guidelines

### Research Question Section
- State your research question clearly
- Explain why it matters
- Provide background context

### Data & Methods Section
Include:
- Data source and size
- Collection methodology
- Ethical considerations (privacy, consent, etc.)
- Analysis tools (pandas, VADER, Gensim)

### Analysis Section
Show:
- Visualizations with descriptive captions
- Code snippets demonstrating your methods
- Clear explanations of what you discovered

### Findings Section
Present:
- Key discoveries (numbered list recommended)
- Data tables with results
- Discussion of what surprised you

### Reflection Section
Address:
- Integration of computational + interpretive methods
- Connections to course frameworks (Classification Logic, AI Agency, etc.)
- Limitations of your approach
- Future research directions
- Your confidence level in conclusions

## Tips for Success

### Writing for Public Audiences
- **Avoid jargon** - Explain technical terms
- **Tell a story** - Guide readers through your process
- **Be honest** - Discuss limitations and uncertainties
- **Show evolution** - Explain how your thinking changed

### Technical Best Practices
- **Alt text for images** - Describe what data visualizations show
- **Descriptive captions** - Help readers interpret charts
- **Code comments** - Explain what your code does
- **TODO markers** - Use `<!-- TODO: ... -->` for incomplete sections

### Accessibility
- Use semantic HTML tags (already done in template)
- Write descriptive alt text for images
- Ensure sufficient color contrast (template already handles this)
- Test with keyboard navigation (Tab key should work)

---

## Troubleshooting

### Images Not Showing

**Problem:** Broken image icons or missing visualizations

**Solutions:**
- ✅ Verify PNG files are in `images/` folder (not `Images/` or `img/`)
- ✅ Check exact filename match (case-sensitive): `sentiment-chart.png` ≠ `Sentiment-Chart.png`
- ✅ Use relative paths: `images/chart.png` (NOT `/images/chart.png` or `C:/Users/...`)
- ✅ Refresh browser cache: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### CSS Not Loading

**Problem:** Plain HTML with no styling

**Solutions:**
- ✅ Verify `styles.css` is in `css/` folder (not root directory)
- ✅ Check `<link>` tag in `index.html` points to `css/styles.css`
- ✅ Clear browser cache and hard refresh
- ✅ Open browser developer tools (F12) and check Console for errors

### GitHub Pages Not Working

**Problem:** 404 error or site not found

**Solutions:**
- ✅ Confirm repository is **Public** (not Private)
- ✅ Verify `index.html` is in root directory (not in subfolder)
- ✅ Wait 1-2 minutes after enabling Pages
- ✅ Check Pages settings: Settings → Pages → Source should be "main branch"
- ✅ Visit exact URL: `https://username.github.io/repo-name/` (with trailing slash)

### Git Conflicts

**Problem:** "Merge conflict" when pulling or pushing

**Solutions:**
- ✅ **Don't panic!** Conflicts are normal in group work
- ✅ Talk with your group - coordinate who's editing what sections
- ✅ Use branches for separate work (see Working as a Group section)
- ✅ Ask for help in class or office hours - we'll walk through it

---

## Final Project Checklist

Use this to verify your portfolio is complete:

### Content Completeness
- [ ] Replaced all placeholder text (Your Name, Your Project Title, etc.)
- [ ] Removed or completed all `<!-- TODO: -->` comments
- [ ] Research question clearly stated with background context
- [ ] Dataset documentation includes source, size, and ethical considerations
- [ ] Analysis methods explained (VADER, Gensim, term frequency, etc.)
- [ ] At least 3 data visualizations with captions and alt text
- [ ] At least 2 code examples with explanations
- [ ] Results table with quantitative findings
- [ ] Critical reflection connects to at least 2 course frameworks
- [ ] Limitations and future directions discussed
- [ ] Footer link updated to point to your GitHub repository

### Technical Requirements
- [ ] All visualization PNG files saved in `images/` folder
- [ ] Image paths correctly point to files (no broken images)
- [ ] CSS stylesheet loading properly (page has styling)
- [ ] Navigation links work (smooth scroll to sections)
- [ ] Portfolio tested in web browser (Chrome, Firefox, or Safari)
- [ ] Mobile responsiveness checked (resize browser window)
- [ ] Committed all changes to GitHub repository
- [ ] GitHub Pages enabled and site is live
- [ ] GitHub repository link in footer works

### Group Work (if applicable)
- [ ] All group members added as repository collaborators
- [ ] Each member's contributions acknowledged
- [ ] Merged all sections together cohesively
- [ ] Resolved any merge conflicts
- [ ] Entire group reviewed final version

### Quality & Polish
- [ ] Proofread all text (spelling, grammar, punctuation)
- [ ] Consistent formatting throughout sections
- [ ] Visualizations are high quality (300 DPI recommended)
- [ ] Code examples are properly formatted and readable
- [ ] Framework connections are meaningful (not superficial)
- [ ] Reflection demonstrates genuine critical thinking
- [ ] Portfolio tells a coherent research story

---

## Alignment with Final Project Requirements

This template directly supports all HW5 deliverables:

1. **Research Essay** ✅
   Portfolio sections mirror essay structure (question → methods → findings → reflection)

2. **Python Notebooks** ✅
   Footer links to GitHub repository with Jupyter notebooks

3. **Dataset Documentation** ✅
   Data & Methods section provides complete dataset documentation

4. **Web Portfolio** ✅
   This entire template IS the web portfolio

---

## Resources

### Course Materials
- **HTML/CSS Workshop** - Review Sessions 1-3 for troubleshooting
- **Semantic HTML Guide** - `semantic_html_css_workshop.html` in course repo
- **HW4-1 & HW4-2** - Reference your own notebooks for content
- **Mini-Lectures** - Review critical frameworks for reflection section

### Technical References
- **Markdown Guide:** [markdownguide.org](https://www.markdownguide.org/)
- **HTML Reference:** [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **Git Basics:** [GitHub's Git Handbook](https://guides.github.com/introduction/git-handbook/)
- **GitHub Pages:** [Official Pages Documentation](https://docs.github.com/en/pages)

### Tools
- **VS Code** (Recommended editor): [code.visualstudio.com](https://code.visualstudio.com/)
- **Jupyter for exports:** Your Google Colab notebooks
- **Image optimization:** Use `plt.savefig(..., dpi=300)` in Python
- **Git GUI** (if you prefer visual): [GitHub Desktop](https://desktop.github.com/)

---

## Support

### Getting Help

1. **Check QUICK_START.md** - Fast answers to common questions
2. **Review workshop materials** - HTML/CSS Sessions 1-3
3. **Test in browser** - Open Developer Tools (F12) to see errors
4. **Ask your group** - Collaborate on problem-solving
5. **Office hours** - Bring specific questions or errors
6. **Canvas discussion** - Post screenshots of issues

### Common Questions

**Q: Do I need to know CSS to use this template?**
A: No! The CSS is complete. You only need to edit `index.html` content.

**Q: Can I use this template for other projects?**
A: Yes! It's designed for digital humanities research but adaptable to any project.

**Q: What if I want a different color scheme?**
A: Edit the `:root` section in `css/styles.css` (see Customization section above).

**Q: How do I make my repository private after the class?**
A: Settings → General → Change repository visibility → Make private (after grading is complete).

**Q: Can I use this in my professional portfolio?**
A: Absolutely! That's the point. It's yours to keep and showcase.

---

## Philosophy: When Coding Meets Culture

This template embodies the course's core principle: **computational methods and cultural interpretation are strongest when integrated.**

Your portfolio should demonstrate:
- **Technical competence** - You can collect, clean, and analyze data
- **Critical thinking** - You can interpret results within cultural context
- **Methodological awareness** - You understand strengths AND limitations
- **Intellectual honesty** - You acknowledge uncertainty and evolution of thought
- **Public communication** - You can explain technical work to general audiences

Remember: **Being "wrong" in your initial predictions is evidence of genuine learning.** Focus on showing how your thinking evolved through engagement with data and methods.

---

## Credits

**Template created for:**
WRIT 20833: Introduction to Coding in the Humanities
Fall 2025 | TCU

**License:** MIT (you may use, modify, and share freely)

**Questions about the template?**
- Review course materials in main repository
- Attend office hours for technical support
- Collaborate with your group on problem-solving

---

**Good luck with your project!**

We're excited to see what you discover when coding meets culture in your research. Focus on the journey of learning, not just the destination of being "right." Your intellectual growth is what matters most.
