# Visual Guide: GitHub Collaboration for Portfolio Projects
## No Command Line Required!

This guide provides step-by-step screenshots and instructions for using GitHub's web interface to create and collaborate on your portfolio.

> **💡 Tip:** This can be used as presentation slides or as a visual reference guide.

---

## Slide 1: Getting Started

### What You'll Learn

✅ How to create your portfolio from the template (2 minutes)
✅ How to edit HTML directly on GitHub (5 minutes)
✅ How to upload images (2 minutes)
✅ How to collaborate with your group (5 minutes)
✅ How to publish with GitHub Pages (2 minutes)

**Total time: ~15 minutes**

**What you need:**
- A GitHub account (free)
- PNG files from your Jupyter notebooks
- Your research content ready to add

---

## Slide 2: Step 1 - Use the Template

### Creating Your Portfolio Repository

**Where to start:** https://github.com/TCU-DCDA/WRIT20833-portfolio-template

**What you'll see:**
```
┌─────────────────────────────────────────────────┐
│  TCU-DCDA / WRIT20833-portfolio-template        │
│  [Use this template ▼]  [Code ▼]  [Fork]       │
└─────────────────────────────────────────────────┘
```

**What to do:**

1. Click the green **"Use this template"** button
2. Select **"Create a new repository"**

**Visual cue:** Look for the green button at the top right of the page!

---

## Slide 3: Step 2 - Name Your Repository

### Fill in Repository Details

**What you'll see:**

```
Create a new repository from WRIT20833-portfolio-template

Owner: [your-username] ▼
Repository name: [_________________]
Description (optional): [_________________]

○ Public    ○ Private

[✓] Include all branches

        [Create repository from template]
```

**What to enter:**

- **Repository name:** `twitter-sentiment-analysis` (use your project name)
- **Description:** "Analysis of sentiment patterns in climate change discourse"
- **Public/Private:** Select **Public** ⚠️ (Required for GitHub Pages!)

**Then:** Click **"Create repository from template"**

---

## Slide 4: Step 3 - Your New Repository

### What You Just Created

**You now have your own copy!**

```
┌─────────────────────────────────────────────────┐
│  your-username / twitter-sentiment-analysis     │
│  Public                                         │
├─────────────────────────────────────────────────┤
│  📁 css/                                        │
│  📁 images/                                     │
│  📄 .gitignore                                  │
│  📄 index.html           ← This is what you edit│
│  📄 README.md                                   │
│  📄 QUICK_START.md                              │
└─────────────────────────────────────────────────┘
```

**Next step:** Edit `index.html` to add your content

---

## Slide 5: Step 4 - Edit HTML on GitHub

### How to Edit Files Directly on GitHub

**Method 1: Click the pencil icon**

1. Click on `index.html` in the file list
2. Look for the ✏️ (pencil) icon at the top right
3. Click it to enter edit mode

**Method 2: Press the `.` (period) key**
- Opens web-based VS Code editor (advanced)

**Visual guide:**
```
┌─────────────────────────────────────────────────┐
│  index.html                      [✏️ Edit] [...]│
│  207 lines (8 KB)                               │
├─────────────────────────────────────────────────┤
│  1  <!DOCTYPE html>                             │
│  2  <html lang="en">                            │
│  3  <head>                                      │
```

**Click the ✏️ pencil icon!**

---

## Slide 6: Step 5 - Make Your Edits

### What to Change in index.html

**Look for these placeholder texts:**

```html
<title>Your Project Title | WRIT 20833</title>
       ↓ Change to ↓
<title>Twitter Climate Sentiment | WRIT 20833</title>
```

```html
<h1>Your Project Title</h1>
<p>Your Name | WRIT 20833 | Fall 2025</p>
       ↓ Change to ↓
<h1>Climate Change Discourse Analysis</h1>
<p>Jane Smith | WRIT 20833 | Fall 2025</p>
```

**Pro tip:** Use browser's Find & Replace
- Press `Ctrl+F` (Windows) or `Cmd+F` (Mac)
- Type `Your Name` → Replace with your actual name
- Type `Your Project Title` → Replace with your title

---

## Slide 7: Step 6 - Add Your Content

### Finding the TODO Markers

**Scroll through index.html and look for:**

```html
<!-- TODO: Add your research question here -->
<p>What patterns emerge when we analyze
   [your cultural phenomenon]?</p>
```

**Replace the example with YOUR content:**

```html
<!-- TODO: Add your research question here -->
<p>What patterns of sentiment emerge in climate
   change discourse on Twitter between 2020-2024?</p>
```

**Keep the HTML tags!** Only change the text between `>` and `<`

---

## Slide 8: Step 7 - Commit Your Changes

### Saving Your Edits to GitHub

**Scroll to bottom of edit page:**

```
┌─────────────────────────────────────────────────┐
│  Commit changes                                 │
├─────────────────────────────────────────────────┤
│  Commit message:                                │
│  [Add research question and project title____]  │
│                                                 │
│  Extended description (optional):               │
│  [_________________________________________]    │
│                                                 │
│  ○ Commit directly to the main branch          │
│  ○ Create a new branch for this commit         │
│                                                 │
│         [Cancel]  [Commit changes]              │
└─────────────────────────────────────────────────┘
```

**What to do:**
1. Write a clear commit message: "Add research question and background"
2. Select "Commit directly to the main branch"
3. Click **"Commit changes"**

---

## Slide 9: Step 8 - Upload Visualizations

### Adding PNG Files from Google Colab

**First: Export from Google Colab**

```python
import matplotlib.pyplot as plt

# After creating your chart:
plt.savefig('sentiment-distribution.png',
            dpi=300, bbox_inches='tight')

# In Colab: Files tab → Right-click → Download
```

**Then: Upload to GitHub**

1. Click into **`images/`** folder in your repository
2. Click **"Add file"** → **"Upload files"**
3. Drag PNG files into the upload box
4. Write commit message: "Add sentiment visualizations"
5. Click **"Commit changes"**

---

## Slide 10: Visual - Upload Process

### What the Upload Screen Looks Like

```
┌─────────────────────────────────────────────────┐
│  Add files to images/                           │
├─────────────────────────────────────────────────┤
│                                                 │
│      ┌─────────────────────────────────┐       │
│      │  Drag files here to add them    │       │
│      │  to your repository             │       │
│      │                                 │       │
│      │  or choose your files           │       │
│      └─────────────────────────────────┘       │
│                                                 │
├─────────────────────────────────────────────────┤
│  Commit changes                                 │
│  [Add sentiment visualizations_______________]  │
│                                                 │
│         [Cancel]  [Commit changes]              │
└─────────────────────────────────────────────────┘
```

**Tip:** You can drag multiple PNG files at once!

---

## Slide 11: GROUP WORK - Add Collaborators

### Setting Up Team Access

**Go to:** Settings tab → Collaborators (left sidebar)

```
┌─────────────────────────────────────────────────┐
│  Collaborators                                  │
├─────────────────────────────────────────────────┤
│  Manage access                                  │
│                                                 │
│  [Add people_______________________________] 🔍 │
│                                                 │
│  Collaborators have read and write access      │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Steps:**
1. Click **"Add people"**
2. Enter teammate's **GitHub username** (not email!)
3. Click **"Add [username] to this repository"**
4. They'll receive an email invitation
5. Repeat for all group members

---

## Slide 12: GROUP WORK - Coordination Strategy

### Avoiding Conflicts When Editing Together

**⚠️ Problem:** Two people editing `index.html` at the same time = conflict!

**✅ Solution: Take Turns**

**Before editing, communicate:**

```
👤 Person A: "I'm editing the Research Question section now"
👤 Person B: "OK, I'll wait and then do Methods"
```

**After editing:**

```
👤 Person A: "Done! Committed Research Question section"
👤 Person B: "Thanks! Starting Methods section now"
```

**Tools for coordination:**
- Slack / Discord / GroupMe
- Text message group chat
- Zoom/Google Meet call while working

---

## Slide 13: GROUP WORK - Division of Labor

### Suggested Section Assignments

**For a 3-person group:**

```
📝 Person A:
   • Research Question
   • Data & Methods

📊 Person B:
   • Results & Analysis
   • Upload all visualizations

💭 Person C:
   • Key Findings
   • Critical Reflection
```

**For a 2-person group:**
```
📝 Person A: Research Question, Data & Methods, Reflection
📊 Person B: Results & Analysis, Findings, Images
```

**Everyone:** Review final portfolio together before submitting!

---

## Slide 14: GROUP WORK - Handling Conflicts

### What If You Both Edit at the Same Time?

**Error you might see:**

```
┌─────────────────────────────────────────────────┐
│  ⚠️ This file has been modified                 │
│                                                 │
│  Someone else changed this file while you were │
│  editing. Please refresh and try again.        │
│                                                 │
│         [Cancel]  [Refresh]                     │
└─────────────────────────────────────────────────┘
```

**How to fix:**

1. **Copy your changes** to Notepad/TextEdit (don't lose your work!)
2. **Refresh** the page
3. **Click edit** again (✏️ pencil icon)
4. **See your teammate's changes**
5. **Add your section** to the updated version
6. **Commit** with message: "Add my section to [teammate]'s changes"

---

## Slide 15: Step 9 - Preview Your Work

### Checking Your Portfolio Before Publishing

**Option 1: View on GitHub (limited preview)**
- Just see the HTML code, not the styled page

**Option 2: Download and open locally**

1. Click **"Code"** button (green)
2. Select **"Download ZIP"**
3. Extract the folder
4. Double-click `index.html`
5. Opens in your browser with full styling!

**Option 3: Enable GitHub Pages (see next slide)**

---

## Slide 16: Step 10 - Enable GitHub Pages

### Publishing Your Portfolio to the Web

**Go to:** Settings tab → Pages (left sidebar)

```
┌─────────────────────────────────────────────────┐
│  GitHub Pages                                   │
├─────────────────────────────────────────────────┤
│  Source                                         │
│  [Deploy from a branch ▼]                       │
│                                                 │
│  Branch                                         │
│  [main ▼]  [/ (root) ▼]      [Save]           │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Steps:**
1. Source: Select **"Deploy from a branch"**
2. Branch: Select **"main"**
3. Folder: Select **"/ (root)"**
4. Click **"Save"**

---

## Slide 17: Step 11 - Get Your URL

### Your Portfolio Is Live!

**After 1-2 minutes, refresh the Settings → Pages page:**

```
┌─────────────────────────────────────────────────┐
│  ✅ Your site is live at                        │
│                                                 │
│  https://your-username.github.io/               │
│         twitter-sentiment-analysis/             │
│                                                 │
│         [Visit site]                            │
└─────────────────────────────────────────────────┘
```

**This is your portfolio URL!**

✅ Submit this link for your assignment
✅ Share with your group to review
✅ Include in your resume/CV
✅ Show to future employers

---

## Slide 18: Troubleshooting - Images Not Showing

### Common Problem: Broken Image Icons

**What you see on your portfolio:**
```
┌─────────────────┐
│  🖼️ [broken]    │
│  Figure 1: ...  │
└─────────────────┘
```

**Causes & Solutions:**

❌ **Wrong filename:** `sentiment-chart.png` ≠ `Sentiment-Chart.PNG`
✅ **Solution:** Check exact filename in `images/` folder

❌ **Wrong path:** `/images/chart.png` or `Images/chart.png`
✅ **Solution:** Use `images/chart.png` (lowercase, relative path)

❌ **File not uploaded**
✅ **Solution:** Check `images/` folder - is your PNG there?

❌ **Browser cache**
✅ **Solution:** Hard refresh: `Ctrl+Shift+R` or `Cmd+Shift+R`

---

## Slide 19: Troubleshooting - GitHub Pages Not Working

### Common Problem: 404 Page Not Found

**What you see when visiting your URL:**
```
┌─────────────────────────────────────────────────┐
│              404                                │
│  There isn't a GitHub Pages site here.         │
└─────────────────────────────────────────────────┘
```

**Checklist:**

- [ ] Repository is **Public** (not Private)
- [ ] Waited 2-3 minutes after enabling Pages
- [ ] Hard refreshed browser (`Ctrl+Shift+R`)
- [ ] Pages is enabled: Settings → Pages → Source = "main"
- [ ] `index.html` is in root folder (not in subfolder)
- [ ] Visiting correct URL (includes repository name)

**If still not working:** Ask in office hours with screenshot!

---

## Slide 20: Best Practices

### Tips for Success

**✅ DO:**
- ✅ Write clear commit messages ("Add methods section" not "update")
- ✅ Communicate with group before editing
- ✅ Refresh page before editing to see latest changes
- ✅ Test in browser before final submission
- ✅ Use descriptive filenames (`sentiment-chart.png` not `chart1.png`)

**❌ DON'T:**
- ❌ Edit at same time as teammate
- ❌ Use vague commit messages ("asdf" or "changes")
- ❌ Upload images to wrong folder
- ❌ Make repository Private (GitHub Pages won't work)
- ❌ Delete files you're not sure about

---

## Slide 21: Workflow Summary

### Complete Process at a Glance

```
1. Use Template → Create Repository
         ↓
2. Edit index.html (click ✏️ pencil)
         ↓
3. Commit changes (with clear message)
         ↓
4. Upload images to images/ folder
         ↓
5. Enable GitHub Pages (Settings → Pages)
         ↓
6. Wait 2 minutes → Visit your URL
         ↓
7. Test and review
         ↓
8. Submit GitHub Pages URL
```

**Total time: ~15 minutes for initial setup**
**Editing time: Varies based on content length**

---

## Slide 22: Group Workflow Summary

### Complete Process for Teams

```
1. ONE PERSON: Use template, create repository
         ↓
2. ADD COLLABORATORS (Settings → Collaborators)
         ↓
3. DIVIDE SECTIONS (coordinate on chat)
         ↓
4. PERSON A: Edit section, commit
         ↓
5. PERSON B: Edit section, commit (wait for A)
         ↓
6. PERSON C: Edit section, commit (wait for B)
         ↓
7. ONE PERSON: Upload all images
         ↓
8. REVIEW TOGETHER before enabling Pages
         ↓
9. Enable Pages, test, submit
```

**Communication is key!** 📱

---

## Slide 23: Resources

### Where to Get Help

**📖 Documentation in Template:**
- `README.md` - Complete guide
- `QUICK_START.md` - Fast reference
- `WEB_WORKFLOW.md` - Detailed walkthrough (this guide!)

**🆘 When You Need Help:**
- Check Troubleshooting sections in README
- Post screenshot in Canvas discussion
- Attend office hours
- Ask your group members
- Test in different browser

**🔗 External Resources:**
- GitHub Pages docs: https://docs.github.com/pages
- HTML reference: https://developer.mozilla.org/docs/Web/HTML

---

## Slide 24: You're Ready!

### Everything You Need to Succeed

**What you learned:**
✅ Create portfolio from template (no code!)
✅ Edit HTML on GitHub (just click ✏️)
✅ Upload visualizations (drag & drop)
✅ Collaborate with group (take turns!)
✅ Publish with GitHub Pages (Settings → Pages)

**What you DON'T need:**
❌ Command line / Terminal
❌ Git software
❌ VS Code (optional but not required)
❌ Advanced technical skills

**Your browser can do everything!** 🌐

---

## Slide 25: Next Steps

### Getting Started Today

**1. Create your repository:**
   - Go to: https://github.com/TCU-DCDA/WRIT20833-portfolio-template
   - Click "Use this template"

**2. Make your first edit:**
   - Click `index.html`
   - Click ✏️ pencil icon
   - Replace "Your Name" with your actual name
   - Commit changes

**3. Enable GitHub Pages:**
   - Settings → Pages
   - Deploy from branch: `main`
   - Save

**You'll have a live portfolio in 5 minutes!** 🎉

---

## Appendix: Quick Reference Card

### One-Page Cheat Sheet

**Create Repository:**
- Use this template → Name it → Make Public → Create

**Edit File:**
- Click file → Click ✏️ → Edit → Commit with message

**Upload Images:**
- Click `images/` → Add file → Upload → Drag PNGs → Commit

**Add Collaborators (Groups):**
- Settings → Collaborators → Add people → Enter username

**Coordinate (Groups):**
- Message: "Editing [section] now"
- Wait for teammate to commit
- Refresh before you start editing

**Enable GitHub Pages:**
- Settings → Pages → Deploy from `main` → Save

**Troubleshoot:**
- Images: Check filename matches exactly
- 404: Make sure repo is Public, wait 2 min
- Conflict: Copy your text, refresh, try again

---

**End of Visual Guide**

Template: https://github.com/TCU-DCDA/WRIT20833-portfolio-template
Questions? See README.md or attend office hours!
