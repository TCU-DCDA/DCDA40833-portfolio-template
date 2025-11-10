# Web-Based Workflow Guide
## No Command Line, No Downloads - Just Your Browser!

This guide shows you how to complete your entire portfolio using only GitHub's web interface. Perfect if you've never used the command line before!

---

## Getting Started

### Step 1: Create Your Portfolio Repository

1. **Go to the template:** https://github.com/TCU-DCDA/WRIT20833-portfolio-template
2. **Click the green "Use this template" button** (top right)
3. **Fill in the details:**
   - **Owner:** Your GitHub username
   - **Repository name:** `your-project-name` (e.g., `twitter-sentiment-analysis`)
   - **Description:** Your project title in plain English
   - **Public/Private:** Choose **Public** (required for GitHub Pages)
4. **Click "Create repository from template"**

✅ You now have your own copy of the template!

---

## Editing Files on GitHub

### Step 2: Edit index.html

1. **Click on `index.html`** in your repository file list
2. **Click the ✏️ (pencil) icon** at top right ("Edit this file")
3. **Make your changes:**
   - Find `Your Name` → Replace with your actual name
   - Find `Your Project Title` → Replace with your project title
   - Find `<!-- TODO: ... -->` comments → Replace with your content
4. **Preview your changes** (optional):
   - Click the "Preview" tab to see formatting
5. **Commit your changes:**
   - Scroll to bottom of page
   - In "Commit message" box, write: `Add research question and background`
   - Click **"Commit changes"** button

✅ Your edits are now saved!

**Tip:** You can edit multiple times. Each time you commit, GitHub saves a version.

---

## Adding Visualizations

### Step 3: Upload PNG Files

1. **Export charts from Google Colab:**
   ```python
   import matplotlib.pyplot as plt

   # After creating your chart:
   plt.savefig('sentiment-chart.png', dpi=300, bbox_inches='tight')

   # Download the file from Colab:
   # Files tab (left sidebar) → Right-click file → Download
   ```

2. **Upload to GitHub:**
   - Click into the **`images/`** folder in your repository
   - Click **"Add file"** → **"Upload files"**
   - Drag PNG files from your computer into the box
   - Or click "choose your files" to browse
   - In commit message, write: `Add sentiment analysis visualizations`
   - Click **"Commit changes"**

3. **Update image references in HTML:**
   - Go back to `index.html`
   - Click ✏️ to edit
   - Find `<img src="images/sentiment-distribution.png"`
   - Change filename to match your uploaded file
   - Commit changes

✅ Your visualizations are now in your portfolio!

---

## Working with a Group

### Step 4: Add Collaborators

1. **Go to Settings** (tab at top of repository)
2. **Click "Collaborators"** in left sidebar
3. **Click "Add people"**
4. **Enter teammate's GitHub username**
5. **Click "Add"**
6. **They'll receive an email invitation**

✅ Your teammates can now edit too!

### Coordination Tips

**To avoid conflicts:**
- **Communicate who's editing what:** "I'm working on the Methods section"
- **Don't edit at the same time:** Wait for teammate to commit before you edit
- **Refresh before editing:** Click your repository homepage to see latest changes
- **Use specific commit messages:** "Add data methods section" (not "update")

**If you both edit simultaneously:**
1. GitHub will show an error: "File has been modified"
2. **Solution:** Copy your changes to Notepad/TextEdit
3. Refresh the page to see their version
4. Click ✏️ to edit again
5. Paste your content into the appropriate section
6. Commit with message: "Merge my section with [teammate]'s changes"

---

## Publishing with GitHub Pages

### Step 5: Make Your Portfolio Live

1. **Go to Settings** (tab at top)
2. **Click "Pages"** in left sidebar
3. **Under "Source":**
   - Select **"Deploy from a branch"**
4. **Under "Branch":**
   - Select **"main"**
   - Folder: **"/ (root)"**
5. **Click "Save"**
6. **Wait 1-2 minutes**
7. **Refresh the page** - you'll see a blue box with your URL:
   - `https://YOUR-USERNAME.github.io/your-project-name/`

✅ Your portfolio is now live on the web!

**Share your URL with:**
- Your group members (to review)
- Your instructor (for submission)
- Future employers (in your resume!)

---

## Common Tasks

### Previewing Your Portfolio Before Publishing

**Option 1: GitHub's preview (limited)**
- When editing `index.html`, click "Preview" tab
- Shows formatting but not final styling

**Option 2: Download and open locally**
- Click "Code" → "Download ZIP"
- Extract folder
- Double-click `index.html`
- Opens in your web browser with full styling

### Making Multiple Edits

You can edit `index.html` as many times as you need:
1. Click the file
2. Click ✏️
3. Make changes
4. Commit with descriptive message
5. Repeat!

Each commit creates a version history you can view.

### Viewing Your Edit History

1. Click on `index.html`
2. Click **"History"** button (top right)
3. See all your commits and what changed

This is helpful if you accidentally delete something!

### Reverting a Mistake

If you made a bad edit:
1. Go to file history (see above)
2. Click on the commit **before** your mistake
3. Click "View file" to see that version
4. Copy the content
5. Go back to current version
6. Edit and paste the old content back
7. Commit with message: "Revert to previous version"

---

## Troubleshooting

### "I don't see the ✏️ pencil icon"

**Problem:** You're not signed in or don't have permission

**Solution:**
- Make sure you're logged into GitHub
- If it's a group project, make sure you're added as collaborator
- If it's your repo, make sure you're viewing YOUR copy (check username in URL)

### "My changes aren't showing on GitHub Pages"

**Problem:** GitHub Pages takes time to update

**Solutions:**
- Wait 2-3 minutes after committing
- Hard refresh your browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check your commit went through (should see new commit in main page)
- Verify GitHub Pages is still enabled (Settings → Pages)

### "My images aren't showing"

**Problem:** Filename or path mismatch

**Solutions:**
- Check exact filename: `sentiment-chart.png` ≠ `Sentiment-Chart.PNG`
- Verify file is in `images/` folder (click into folder to check)
- Check HTML uses `images/filename.png` (NOT `Images/` or `/images/`)
- Commit messages should confirm upload: "Add sentiment-chart.png"

### "I got an error when committing"

**Problem:** Conflict with teammate's edit or file was modified

**Solutions:**
- Copy your changes to Notepad/TextEdit
- Refresh the page
- Try editing again
- Paste your content
- If still failing, ask teammate to wait, then try again

### "My repository is private but GitHub Pages isn't working"

**Problem:** Free GitHub accounts need Public repos for Pages

**Solution:**
- Go to Settings → General
- Scroll to "Danger Zone"
- Click "Change repository visibility"
- Select "Public"
- Confirm

---

## Best Practices

### Commit Messages

**Good commit messages:**
- "Add research question and background context"
- "Upload sentiment analysis visualizations"
- "Complete critical reflection section"
- "Fix typo in methods section"

**Bad commit messages:**
- "update"
- "changes"
- "asdf"
- (no message)

**Why it matters:** Good messages help you and your group track what changed.

### Group Communication

**Before editing:**
- "I'm adding the data methods section now"
- "Working on visualizations, will commit in 10 min"

**After editing:**
- "Committed methods section, you can edit findings now"
- "Uploaded 3 charts to images folder"

**Tools for coordination:**
- GroupMe, Slack, Discord, text message
- GitHub Issues (click "Issues" tab, create checklist)
- Shared Google Doc with task list

### File Organization

**Keep organized:**
- All visualization PNGs go in `images/` folder
- Use descriptive filenames: `sentiment-distribution.png` not `chart1.png`
- Don't create new folders (template structure is already set up)

---

## Workflow Summary

**For Individual Projects:**

1. Use template → Create repository
2. Edit `index.html` on GitHub (click file, click ✏️)
3. Upload images to `images/` folder
4. Enable GitHub Pages (Settings → Pages)
5. Share your URL!

**For Group Projects:**

1. One person: Use template → Create repository
2. Add collaborators (Settings → Collaborators)
3. Divide sections between team members
4. Each person: Edit their section (communicate before editing!)
5. One person: Upload all images
6. Enable GitHub Pages
7. All review together before submitting

---

## Getting Help

**During editing:**
- Use "Preview" tab to check formatting
- Save content to Notepad before committing (backup!)
- Test portfolio in browser before final submission

**If stuck:**
- Check this guide's Troubleshooting section
- Ask your group members
- Post in Canvas discussion with screenshot
- Attend office hours

**Resources:**
- Full documentation: `README.md` in repository
- Quick reference: `QUICK_START.md` in repository
- GitHub's own help: https://docs.github.com/

---

## You're Ready!

This workflow requires:
- ✅ A web browser
- ✅ A GitHub account
- ✅ PNG files from your Google Colab notebooks

This workflow does NOT require:
- ❌ Command line / Terminal
- ❌ Git software installation
- ❌ VS Code or text editor (optional but helpful)
- ❌ Any downloads (except optionally to preview locally)

**Everything happens in your browser on GitHub.com!**

Good luck with your project! 🎉
