# Quick Start Guide

## 5-Minute Setup (No Downloads Required!)

### Option A: Edit on GitHub (Easiest - No Command Line!)

1. **Create your copy:**
   - Click green **"Use this template"** button at top
   - Name it: `your-project-name`
   - Make it **Public**
   - Click "Create repository from template"

2. **Edit HTML directly on GitHub:**
   - Click `index.html` in your new repository
   - Click the ✏️ (pencil icon) at top right
   - Find `Your Name` and replace with your actual name
   - Find `Your Project Title` and replace with your title
   - Scroll to `<!-- TODO: ... -->` comments and add your content
   - Scroll down and click **"Commit changes"**

3. **Upload visualizations:**
   - Click into `images/` folder
   - Click "Add file" → "Upload files"
   - Drag PNG files from your computer
   - Click "Commit changes"

4. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Source: Deploy from branch `main`
   - Click Save
   - Your site will be live at: `YOUR-USERNAME.github.io/your-project-name`

### Option B: Download and Edit Locally

1. **Get the template:**
   - Click green "Code" button → Download ZIP
   - Extract folder and rename to your project name

2. **Edit in text editor:**
   - Open `index.html` in VS Code (or any text editor)
   - Use Find & Replace (Ctrl+F / Cmd+F):
     - Replace `Your Name` → Your actual name
     - Replace `Your Project Title` → Your project title
     - Replace `yourusername` → Your GitHub username

3. **Fill in content:**
   - Look for `<!-- TODO: ... -->` comments
   - Replace with your research content

4. **Add images:**
   - Export visualizations from Google Colab as PNG
   - Save to `images/` folder

5. **Upload to GitHub:**
   - Create new repository on GitHub (make it Public)
   - Click "Add file" → "Upload files"
   - Drag all files from your folder
   - Click "Commit changes"

6. **Enable GitHub Pages** (same as Option A above)

## Key Sections to Fill In

| Section | What to Add |
|---------|-------------|
| **Research Question** | Your question + background context |
| **Data & Methods** | Dataset details, collection method, tools used |
| **Analysis** | Visualizations + code examples + explanations |
| **Findings** | Key discoveries + data tables |
| **Reflection** | Framework connections + limitations + future work |

## Common Edits

### Change Colors
Edit `css/styles.css` at the top:
```css
:root {
    --primary-color: #4d1979;      /* Change this */
    --secondary-color: #7c3aed;    /* And this */
}
```

### Add More Sections
Copy an existing section and change the ID:
```html
<section id="newsection">
    <h2>New Section Title</h2>
    <p>Content here...</p>
</section>
```

Don't forget to add it to navigation!

### Add More Visualizations
Copy the figure block:
```html
<figure class="viz-container">
    <img src="images/your-chart.png" alt="Description of chart">
    <figcaption>Figure X: Your caption here</figcaption>
</figure>
```

## Checklist

- [ ] Personalized title and name
- [ ] Filled in all TODO sections
- [ ] Added visualizations to `images/`
- [ ] Updated image paths in HTML
- [ ] Added GitHub repo link
- [ ] Tested in browser
- [ ] Ready to deploy!

## Need Help?

- **Full documentation:** See `README.md`
- **CSS reference:** See workshop Session 2
- **HTML structure:** See workshop Session 1
- **Examples:** See workshop Session 3

---

**Remember:** The CSS is complete—you only need to edit `index.html` content!
