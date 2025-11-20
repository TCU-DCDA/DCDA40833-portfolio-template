# Editing Your Portfolio: A Beginner's Guide

**For WRIT 20833 Students**

This guide focuses on the practical, day-to-day workflow of editing your portfolio template. If you need setup instructions, see [SETUP_GUIDE.md](SETUP_GUIDE.md) instead.

---

## Table of Contents

1. [Opening Your Project](#opening-your-project)
2. [Understanding the Template Structure](#understanding-the-template-structure)
3. [The Editing Workflow](#the-editing-workflow)
4. [Finding Your TODO Markers](#finding-your-todo-markers)
5. [Editing HTML Content](#editing-html-content)
6. [Adding Your Images](#adding-your-images)
7. [Previewing Your Changes](#previewing-your-changes)
8. [Saving with GitHub Desktop](#saving-with-github-desktop)
9. [Common Beginner Mistakes](#common-beginner-mistakes)
10. [Quick Troubleshooting](#quick-troubleshooting)

---

## Opening Your Project

### Step 1: Open in VS Code

1. **Launch VS Code**
2. **File → Open Folder** (NOT Open File!)
3. **Navigate to your portfolio folder** (wherever you cloned it)
4. **Click "Open"**

**You should see** a file tree on the left showing:
```
├── index.html
├── css/
│   └── styles.css
├── images/
├── README.md
└── other files...
```

**Pro Tip:** Always open the **folder**, not individual files. This gives you access to all project files at once.

---

## Understanding the Template Structure

### What Each File Does

| File | What It Is | Do You Need to Edit It? |
|------|-----------|------------------------|
| **index.html** | Your portfolio content | ✅ **YES - This is your main file** |
| **css/styles.css** | Visual styling (colors, fonts, layout) | ❌ Only if changing colors |
| **images/** folder | Storage for your charts and visualizations | ✅ Add your PNG files here |
| **README.md** | Documentation (what you're reading now!) | ❌ No |

**Focus 95% of your time on `index.html`** - that's where all your content goes.

---

## The Editing Workflow

Here's the cycle you'll repeat over and over:

```
1. PULL → Get latest changes from GitHub
2. EDIT → Make changes in VS Code
3. SAVE → Save your file (Cmd+S or Ctrl+S)
4. PREVIEW → Check in browser
5. COMMIT → Save changes with GitHub Desktop
6. PUSH → Send changes to GitHub
```

Let's break down each step:

---

## Finding Your TODO Markers

The template has helpful `<!-- TODO: ... -->` comments showing exactly where to add content.

### How to Find TODOs in VS Code

**Method 1: Search for TODO**
1. Press **Cmd+F** (Mac) or **Ctrl+F** (Windows)
2. Type `TODO`
3. Press **Enter** to jump through each one

**Method 2: Use the TODO Tree Extension (Optional)**
1. Install "TODO Tree" extension in VS Code
2. TODOs appear in a special sidebar panel
3. Click to jump to each one

### What a TODO Looks Like

```html
<!-- TODO: Add your research question here -->
<p>What patterns emerge when we analyze [your topic]?</p>
```

**Your job:** Replace the placeholder text with YOUR content, then delete the TODO comment.

**Before:**
```html
<!-- TODO: Add your research question here -->
<p>What patterns emerge when we analyze [your topic]?</p>
```

**After:**
```html
<p>What patterns emerge when we analyze Taylor Swift's lyrical evolution
   using sentiment analysis and topic modeling across her discography?</p>
```

---

## Editing HTML Content

### Basic HTML You Need to Know

Don't worry - you only need to understand a few patterns!

#### 1. Paragraphs

```html
<p>Your text goes here.</p>
```

**Pro Tip:** You can break long paragraphs across multiple lines in your code - HTML ignores line breaks inside tags.

```html
<p>This is a really long paragraph that I'm breaking
   across multiple lines in my code editor to make it
   easier to read while I'm editing.</p>
```

#### 2. Headings

```html
<h2>Main Section Title</h2>
<h3>Subsection Title</h3>
```

#### 3. Bold and Emphasis

```html
<p><strong>This text is bold</strong> and <em>this is italicized</em>.</p>
```

#### 4. Lists

**Bulleted lists:**
```html
<ul>
    <li>First point</li>
    <li>Second point</li>
    <li>Third point</li>
</ul>
```

**Numbered lists:**
```html
<ol>
    <li>First finding</li>
    <li>Second finding</li>
    <li>Third finding</li>
</ol>
```

#### 5. Links

```html
<a href="https://github.com/yourusername/your-repo">Link text here</a>
```

**Don't forget to update the footer link to YOUR GitHub repository!**

### Editing Strategy: Copy and Modify

**Don't delete the template structure** - just modify the text inside the tags.

**Keep this:**
```html
<section id="findings">
    <h2>Key Findings</h2>
```

**Change this:**
```html
    <p>The computational analysis revealed three major insights:</p>
```

**To this:**
```html
    <p>My analysis of 500 Taylor Swift lyrics revealed surprising patterns:</p>
```

---

## Adding Your Images

### Step 1: Prepare Your Images

**In Google Colab**, after creating a visualization:

```python
import matplotlib.pyplot as plt

# Your plotting code here
plt.figure(figsize=(10, 6))
# ...

# Save with high quality
plt.savefig('sentiment-distribution.png', dpi=300, bbox_inches='tight')
plt.show()
```

**Download the PNG:**
1. In Colab, click **Files** tab (left sidebar)
2. **Right-click** your PNG file
3. **Download**

### Step 2: Add to Your Project

**Option A: Drag and Drop (Easiest)**
1. Open the `images/` folder on your computer
2. Drag your PNG files into that folder

**Option B: Using VS Code**
1. In VS Code, **right-click** the `images/` folder (left sidebar)
2. **Reveal in Finder** (Mac) or **Reveal in File Explorer** (Windows)
3. Copy your PNG files into this folder

### Step 3: Reference in HTML

**Find the image placeholder in `index.html`:**

```html
<img src="images/sentiment-distribution.png"
     alt="Bar chart showing distribution of positive, negative, and neutral sentiment">
```

**Update with YOUR filename:**
- Change `sentiment-distribution.png` to match your actual filename
- Update the `alt` text to describe what your chart shows

**Common Mistakes:**
- ❌ `src="sentiment-chart.PNG"` (wrong case)
- ❌ `src="images\sentiment-chart.png"` (wrong slash direction)
- ❌ `src="Downloads/sentiment-chart.png"` (wrong folder)
- ✅ `src="images/sentiment-chart.png"` (CORRECT!)

### Step 4: Add Captions

```html
<figure class="viz-container">
    <img src="images/your-chart.png"
         alt="Description for screen readers">
    <figcaption>Figure 1: Description of what this chart shows</figcaption>
</figure>
```

---

## Previewing Your Changes

### Method 1: Open in Browser (Simplest)

1. **Save your file** in VS Code (Cmd+S or Ctrl+S)
2. In VS Code's file explorer, **right-click `index.html`**
3. **Reveal in Finder/Explorer**
4. **Double-click `index.html`** → Opens in your default browser
5. **Refresh** the browser after making more changes

### Method 2: Live Server Extension (Recommended)

**One-time setup:**
1. In VS Code, go to **Extensions** (left sidebar, looks like blocks)
2. Search for **"Live Server"**
3. Install it

**Using Live Server:**
1. Right-click **anywhere in `index.html`**
2. Select **"Open with Live Server"**
3. Browser opens automatically
4. **Auto-refreshes when you save** - super convenient!

---

## Saving with GitHub Desktop

This is how you save your progress to GitHub (and share with your team if working in a group).

### The Golden Rule

**ALWAYS do this in order:**

1. **PULL** - Get latest changes from GitHub
2. **EDIT** - Make your changes
3. **COMMIT** - Save with a message
4. **PUSH** - Send to GitHub

### Step-by-Step

#### 1. PULL First (Critical!)

1. Open **GitHub Desktop**
2. Click **"Fetch origin"** (top right)
3. If it says **"Pull origin"**, click that too

**Why?** This gets any changes your teammates made. Always pull BEFORE editing to avoid conflicts.

#### 2. Make Your Edits in VS Code

Edit `index.html`, add images, etc.

#### 3. Check What Changed

Go back to **GitHub Desktop**. You'll see:
- **Left panel:** Files you changed
- **Right panel:** Exactly what changed (red = deleted, green = added)

**Review your changes** to make sure you didn't accidentally delete something important.

#### 4. Commit Your Changes

At the bottom left of GitHub Desktop:

**Summary (required):**
```
Added research question and data description
```

**Description (optional):**
```
- Wrote my research question section
- Added data source and ethics discussion
- Still need to add visualizations
```

**Click "Commit to main"**

#### 5. PUSH to GitHub

**Click "Push origin"** (top right button)

**Done!** Your changes are now on GitHub.

### Good Commit Messages

**Good:**
- `Added sentiment analysis section with code examples`
- `Fixed broken image links in results section`
- `Updated research question based on feedback`

**Not helpful:**
- `updated stuff`
- `changes`
- `asdfjkl`

**Why it matters:** If you need to undo something later, good messages help you find the right version.

---

## Common Beginner Mistakes

### 1. Forgetting to Save

**Problem:** Made changes, refreshed browser, nothing happened.

**Solution:** Press **Cmd+S** (Mac) or **Ctrl+S** (Windows) to save in VS Code. Look for the **white dot** next to the filename - if you see it, the file isn't saved yet.

### 2. Opening Individual Files Instead of Folder

**Problem:** Can't see other project files in VS Code.

**Solution:** **File → Open Folder**, then select your portfolio folder. NOT "Open File"!

### 3. Wrong Image Paths

**Problem:** Images show as broken icons.

**Solution:**
- ✅ Use `images/filename.png` (lowercase, forward slash)
- ❌ NOT `Images/` or `img/` or `pictures/`
- ✅ Filename must match EXACTLY (case-sensitive!)

### 4. Forgetting to Pull Before Editing (Groups)

**Problem:** "Merge conflict" error when trying to push.

**Solution:**
1. **ALWAYS click "Fetch origin" → "Pull"** in GitHub Desktop BEFORE editing
2. **Communicate with your team:** "I'm editing the Methods section now"
3. **Wait for teammates to push** before you start editing

### 5. Deleting HTML Tags Accidentally

**Problem:** Page looks broken, styling disappeared.

**Solution:**
- Only edit **text inside** tags, not the tags themselves
- If you deleted `</section>` or `</div>` by accident, undo (Cmd+Z)
- Use VS Code's **auto-indent** feature: Select all (Cmd+A), then Format Document

### 6. Not Testing Before Committing

**Problem:** Pushed broken code to GitHub, entire team affected.

**Solution:**
1. **Always preview in browser** before committing
2. Check that images load
3. Read through your content for typos
4. **THEN** commit and push

---

## Quick Troubleshooting

### Images Not Showing

**Checklist:**
- [ ] File is in the `images/` folder (not `Images/`, not root folder)
- [ ] Filename in HTML matches exactly (case-sensitive)
- [ ] Path uses forward slash: `images/chart.png`
- [ ] File is actually a PNG (not `.pdf`, `.ai`, or other format)
- [ ] You saved the HTML file
- [ ] You refreshed the browser (hard refresh: Cmd+Shift+R or Ctrl+Shift+R)

### CSS Not Loading (Page Looks Plain)

**Checklist:**
- [ ] `styles.css` is in the `css/` folder
- [ ] First line of `index.html` still says `<link rel="stylesheet" href="css/styles.css">`
- [ ] Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)

### Can't Push to GitHub

**Error:** "You don't have permission"

**Solution:**
- If working in a group: Make sure repository owner added you as collaborator
- Check that you're logged into GitHub Desktop with the correct account

**Error:** "Need to pull first"

**Solution:**
1. Click **"Fetch origin"**
2. Click **"Pull origin"**
3. If there are conflicts, see next section

### Merge Conflicts (Group Work)

**What it means:** You and a teammate edited the same lines.

**How to fix:**
1. GitHub Desktop will show which file has conflicts
2. **Open that file in VS Code**
3. Look for these markers:
   ```html
   <<<<<<< HEAD
   Your version here
   =======
   Your teammate's version here
   >>>>>>> main
   ```
4. **Delete the markers** and keep the version you want (or combine both)
5. **Save the file**
6. Go back to GitHub Desktop → **Commit** → **Push**

**Prevention:** Coordinate with your team - work on different sections at different times!

---

## Working as a Team: Best Practices

### Communication is Everything

**Before editing:**
> "Hey team, I'm going to work on the Data & Methods section for the next hour. Don't edit that part!"

**After editing:**
> "Methods section is done and pushed. Safe to pull now!"

### Divide Sections Clearly

**Example for a 3-person team:**
- **Person A:** Research Question + Background
- **Person B:** Data & Methods + Analysis code
- **Person C:** Findings + Reflection + Images

**Everyone:** Pull before editing, push when done, communicate constantly!

### Use Descriptive Commit Messages

Help your team understand what you did:
- `Added sentiment analysis visualizations - Person A`
- `Fixed typos in reflection section - Person B`
- `Updated topic modeling code examples - Person C`

---

## Quick Reference: Essential Shortcuts

### VS Code

| Action | Mac | Windows |
|--------|-----|---------|
| Save file | Cmd+S | Ctrl+S |
| Find | Cmd+F | Ctrl+F |
| Find and Replace | Cmd+H | Ctrl+H |
| Undo | Cmd+Z | Ctrl+Z |
| Select All | Cmd+A | Ctrl+A |

### Browser

| Action | Mac | Windows |
|--------|-----|---------|
| Hard Refresh | Cmd+Shift+R | Ctrl+Shift+R |
| Open Developer Tools | Cmd+Option+I | F12 |

---

## Next Steps

### Once You Finish Editing

1. **Remove all TODO comments** - Shows you completed all sections
2. **Test thoroughly:**
   - Click every navigation link
   - Check every image loads
   - Read through for typos
   - Test on mobile (resize browser window to phone size)
3. **Get feedback** from your group or classmate
4. **Make final edits**
5. **Deploy to GitHub Pages** (see [README.md](README.md) for instructions)

### Make It Yours

**Optional enhancements:**
- Change color scheme (edit `css/styles.css`)
- Add more visualizations
- Include additional code examples
- Add a dataset preview section
- Link to related research

---

## Remember

- **Save often** (Cmd+S becomes muscle memory)
- **Preview frequently** (catch mistakes early)
- **Pull before editing** (especially in groups)
- **Commit with good messages** (your future self will thank you)
- **Ask for help** when stuck (office hours, classmates, discussion board)

**You've got this!** The template does most of the hard work - you just need to add your research story. Focus on explaining your project clearly, and the technical stuff will fall into place.

---

## Need More Help?

- **Setup issues?** See [SETUP_GUIDE.md](SETUP_GUIDE.md)
- **Quick reference?** See [QUICK_START.md](QUICK_START.md)
- **Visual walkthrough?** See [VISUAL_GUIDE.md](VISUAL_GUIDE.md)
- **Stuck?** Come to office hours or post on Canvas discussion board!

---

**Good luck with your portfolio!** Remember: every expert was once a beginner. You're learning valuable skills that will serve you beyond this class.
