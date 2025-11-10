# Instructor Setup Guide

This guide explains how to publish the portfolio template as a GitHub template repository that your students can use.

---

## Quick Setup (5 Minutes)

### Step 1: Create GitHub Repository

1. **Go to GitHub** and log in
2. **Click "+" → "New repository"**
3. **Fill in repository details:**
   - **Repository name:** `WRIT20833-portfolio-template`
   - **Description:** "Template for WRIT 20833 'When Coding Meets Culture' final project portfolios"
   - **Visibility:** **Public** (required for students to use as template)
   - **Do NOT** initialize with README (we already have one)
   - Click **"Create repository"**

### Step 2: Push Template to GitHub

Run these commands in your terminal:

```bash
# Navigate to the template directory
cd /Users/crode/Documents/00-GitHub/01-Teaching/WRIT20833/WRIT20833-portfolio-template

# Add remote (replace YOUR-GITHUB-USERNAME with your actual username)
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/WRIT20833-portfolio-template.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable Template Repository

1. **Go to repository Settings** (on GitHub)
2. **Scroll to "Template repository" section**
3. **Check the box:** ☑️ "Template repository"
4. **Save**

That's it! Students can now click "Use this template" to create their own copies.

---

## Student Instructions

Share this link with students: `https://github.com/YOUR-GITHUB-USERNAME/WRIT20833-portfolio-template`

### How Students Use the Template

1. **Click "Use this template"** button (green button at top)
2. **Create their repository:**
   - Name: their project name (e.g., `twitter-sentiment-analysis`)
   - Make it Public (required for GitHub Pages)
   - Click "Create repository from template"
3. **Clone to their computer:**
   ```bash
   git clone https://github.com/THEIR-USERNAME/their-project-name.git
   cd their-project-name
   ```
4. **Start editing** `index.html` following the README instructions

### For Group Projects

One student creates the repository from template, then:
1. **Settings → Collaborators**
2. **Click "Add people"**
3. **Enter teammates' GitHub usernames**

All group members can now clone and collaborate on the same repository.

---

## Template Features

### What's Included

- ✅ **Complete HTML template** with semantic structure
- ✅ **Professional CSS** (TCU colors, responsive, mobile-friendly)
- ✅ **Comprehensive README** with:
  - GitHub template usage instructions
  - Group collaboration workflow
  - Git commands refresher
  - GitHub Pages deployment guide
  - Troubleshooting section
  - Complete project checklist
- ✅ **QUICK_START guide** for impatient students
- ✅ **Critical framework integration** guidance
- ✅ **Images directory** ready for visualizations
- ✅ **.gitignore** for common temporary files

### Pedagogical Design

The template embodies "When Coding Meets Culture" principles:
- Integrates technical and critical thinking
- Guides students through complete research workflow
- Emphasizes intellectual honesty and limitation acknowledgment
- Supports public-facing digital humanities communication

---

## Customization Options

### Before Publishing to GitHub

If you want to customize before students use it:

**Change colors:** Edit `css/styles.css` `:root` section
```css
:root {
    --primary-color: #4d1979;      /* TCU Purple */
    --secondary-color: #7c3aed;    /* Light Purple */
    --accent-color: #ffd700;       /* Gold */
}
```

**Modify sections:** Edit `index.html` structure
**Update course info:** Edit footer in `index.html`

### After Students Start Using

Students get independent copies, so changes to your template won't affect their work. This is by design - they "fork" from your template at a specific point in time.

---

## Demonstration Portfolio (Optional)

Consider creating a demonstration portfolio to show students what a complete project looks like:

1. **Use the template yourself** (click "Use this template")
2. **Name it:** `portfolio-example` or `demo-project`
3. **Fill in with sample data:**
   - Use public domain text (e.g., Project Gutenberg)
   - Create simple visualizations
   - Write brief but complete sections
4. **Deploy to GitHub Pages**
5. **Share link** with students as reference

This gives students a concrete target to aim for.

---

## GitHub Pages Preview

To preview how portfolios will look when deployed:

1. **Go to repository Settings → Pages**
2. **Source:** Deploy from branch `main`, folder `/ (root)`
3. **Save**
4. **Visit:** `https://YOUR-USERNAME.github.io/WRIT20833-portfolio-template/`

This lets you test the template as students will see it live.

---

## Troubleshooting

### Students Report Template Button Missing

**Problem:** "I don't see a 'Use this template' button"

**Solution:** Verify you checked "Template repository" in Settings

### GitHub Pages Not Working for Students

**Problem:** Student portfolio shows 404

**Common causes:**
- Repository is Private (must be Public)
- `index.html` is in a subfolder (must be in root)
- Haven't waited 1-2 minutes after enabling Pages
- Typo in URL

### Merge Conflicts in Group Projects

**Problem:** Students get merge conflicts

**Solution:**
- Show them how to use branches
- Divide sections clearly (one person per section)
- Pull before pushing: `git pull` then `git push`
- Attend office hours for hands-on conflict resolution

---

## Integration with Canvas

### Suggested Canvas Assignment Setup

**Assignment Type:** External Tool or File Upload

**Submission Requirements:**
1. GitHub repository URL (with Jupyter notebooks)
2. GitHub Pages URL (live portfolio)
3. (Optional) PDF export of portfolio for backup

**Example Canvas Instructions:**

```
Final Project Submission

Submit TWO links:

1. GitHub Repository: https://github.com/YOUR-USERNAME/project-name
   (This should contain your Jupyter notebooks and dataset)

2. GitHub Pages Portfolio: https://YOUR-USERNAME.github.io/project-name/
   (This is your live web portfolio)

Both links must be working for full credit. If GitHub Pages is not working,
also submit a PDF export of your portfolio as backup.

Group projects: All members submit the same links, but indicate your
individual contributions in the reflection section.
```

---

## Student Support Strategy

### Before Project Starts
- **Demo the template** in class
- **Show "Use this template" workflow**
- **Walk through one section** together
- **Explain GitHub Pages deployment**

### During Project Work
- **Office hours** for git troubleshooting
- **Canvas discussion** for common questions
- **Group checkpoints** to catch issues early

### Common Student Questions

**Q: "Do I need to know HTML/CSS?"**
A: No! Just edit the content in `index.html`. CSS is complete.

**Q: "Can I work alone even though it's designed for groups?"**
A: Absolutely. All instructions work for individuals too.

**Q: "What if I want to make my repo private after grading?"**
A: Settings → Change visibility → Make private (after final grades)

---

## Updates and Maintenance

### If You Need to Update the Template

Changes to the template repository won't affect student copies (by design). To share updates:

1. **Create an UPDATES.md** file in the template
2. **Announce in class** if critical fix
3. **Students can manually copy** updated files if needed

### For Next Semester

1. **Archive this version** by creating a release: `v2025-fall`
2. **Create new version** by cloning and modifying
3. **Name new repo:** `WRIT20833-portfolio-template-2026` (or keep same name)

---

## License and Reuse

The template uses MIT License - students can:
- ✅ Use for personal portfolio
- ✅ Modify and customize
- ✅ Use in job applications
- ✅ Share with others
- ✅ Remove course-specific branding

This is intentional - we want students to build professional artifacts they can showcase.

---

## Analytics (Optional)

To see how many students use the template:

1. **Insights tab** → "Traffic" shows views
2. **Network graph** shows how many forked/used template
3. **Used by** section shows dependent repositories

Not essential, but interesting to track adoption.

---

## Questions or Issues?

If you encounter problems with the template:
1. Check GitHub's template repository documentation
2. Test with a fresh "Use this template" copy
3. Ask students to screenshot specific errors
4. Use browser Developer Tools (F12) to debug CSS/HTML

---

## Summary Checklist

Setup checklist for publishing:

- [ ] Created GitHub repository (Public)
- [ ] Pushed template files to GitHub
- [ ] Enabled "Template repository" in Settings
- [ ] Tested "Use this template" workflow
- [ ] Verified GitHub Pages preview works
- [ ] Shared link with students
- [ ] (Optional) Created demonstration portfolio
- [ ] (Optional) Set up Canvas assignment with submission instructions

---

**You're all set!** Students now have a professional, easy-to-use template for their final projects that will:
- Reduce technical barriers
- Let them focus on content and critical thinking
- Produce portfolio-worthy artifacts
- Support collaborative group work
- Integrate seamlessly with GitHub Pages

The template is designed to make the technical side smooth so students can focus on what matters most: developing data-driven opinions about culture through code.
