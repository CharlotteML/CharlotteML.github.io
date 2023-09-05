- Member
  - Write a brief introduction to each member
  - All the text should be in JSON as shown below, and the images should be in the same directory
  - File name should indicate the name of the member AND member type, e.g. `john_doe_alumni.json` or `john_doe_faculty.json` or `john_doe_student.json`
  - This should include:
    - Name
      - first, middle, last
      - Nullable, e.g. `"name": {"first": "John", "middle": null, "last": "Smith"}`
    - Position
      - list of strings
      - e.g. `["Ph.D. Student", "Research Assistant"]`
    - Research interests
      - list of strings
      - e.g. `["Machine Learning", "Computer Vision"]`
    - Introduction
      - Brief introduction to the member in 2-3 sentences
      - e.g. `John Doe is a Ph.D. student in the Department of Computer Science at UNC Charlotte. He received his B.S. degree in Computer Science from UNC Charlotte in 2020. His research interests include machine learning and computer vision.`
    - Teaching
      - Only for faculty members
      - list of objects with course title and code, term
      - e.g. `[{"course": "ITCS 4156", "title": "Introduction to Machine Learning", "term": "Spring 2023"}]`
      - Leave blank if not available or not applicable
    - Contact
      - Email (list of strings), phone (list of strings), address (string), website (string)
      - Leave blank if not available or not applicable
    - Photo
      - Filename, e.g. `john_doe.jpg`
      - Photo should be in the same directory
  - e.g. `xiang_zhang_faculty.json`
    ```json
    {
      "name": {
        "first": "Xiang",
        "middle": null,
        "last": "Zhang"
      },
      "position": ["Assistant Professor"],
      "research": [
        "Data Mining",
        "Machine Learning",
        "Pervasive Healthcare",
        "Medical Time Series",
        "Brain-Computer Interfaces"
      ],
      "introduction": "Xiang is an Assistant Professor in the Department of Computer Science at the University of North Carolina (UNC) at Charlotte. Before joining UNC Charlotte, he was a postdoctoral fellow at Harvard University from March 2020 to July 2022. Xiang received his Ph.D. degree (in 2020) in Computer Science from the University of New South Wales (UNSW). His research interests lie in data mining and machine learning with applications in pervasive healthcare, medical time series, and Brain-Computer Interfaces (BCIs). Xiang's research outcomes have been published in prestigious conferences (such as ICLR, NeurIPS, and KDD) and journals (like Nature Computational Science).",
      "teaching": [
        {
          "course": "ITCS 4156",
          "title": "Introduction to Machine Learning",
          "term": "Fall 2023"
        },
        {
          "course": "ITCS 4156",
          "title": "Introduction to Machine Learning",
          "term": "Spring 2023"
        },
        {
          "course": "ITCS 4156",
          "title": "Introduction to Machine Learning",
          "term": "Fall 2022"
        }
      ],
      "contact": {
        "email": ["xiang.alan.zhang@gmail.com", "xiang.zhang@uncc.edu"],
        "phone": ["704-687-1898"],
        "address": "Room 230A, Woodward Hall",
        "website": "https://xiangzhang.info/"
      },
      "photo": "/photos/xiang-zhang.png"
    }
    ```
- Publications
  - Collect all the publications of the lab members
  - Add publications to Zotero and then export to `CSL JSON` format
  - Use the [Clean CSL JSON](https://github.com/CharlotteML/Clean-CSL-JSON) tool to clean the exported JSON.
  - Processed JSON should be like this:
    ```json
    {
      "id": "221306d2033a541154b5710387d754b1",
      "type": "paper-conference",
      "container-title": "Advances in Neural Information Processing Systems",
      "page": "9263\u20139275",
      "publisher": "Curran Associates, Inc.",
      "source": "Neural Information Processing Systems",
      "title": "GNNGuard: Defending Graph Neural Networks against Adversarial Attacks",
      "title-short": "GNNGuard",
      "URL": "https://proceedings.neurips.cc/paper/2020/hash/690d83983a63aa1818423fd6edd3bfdb-Abstract.html",
      "volume": "33",
      "author": [
        {
          "family": "Zhang",
          "given": "Xiang"
        },
        {
          "family": "Zitnik",
          "given": "Marinka"
        }
      ],
      "accessed": {
        "date-parts": [["2023", 8, 21]]
      },
      "issued": {
        "date-parts": [["2020"]]
      }
    },
    ```
  - Save the processed JSON to json file with the name of the author, e.g. `xiang_zhang.json`
- Research
  - summarize major project(s)/field(s)
  - Preferably in Markdown, though other text formats are acceptable, attach images and videos in the same directory
  - This should include:
    - Title
      - e.g. `AI theory`
    - Brief description within a short paragraph
      - e.g. `AI Theory is the foundational bedrock of artificial intelligence, focusing on the mathematical and computational principles that govern the behavior and capabilities of AI systems. It explores algorithms, complexity, logic, and statistical methods to understand how machines can mimic human intelligence. Research in AI Theory seeks to create models that can explain, predict, and enhance the performance of AI, ensuring robustness, efficiency, and ethical considerations.`
    - Image, vector graphic illustrations preferred
      - e.g. An illustration of alignment of AI systems with human values
    - List of recent publications related to the project/field (title and link to the publication)
    - List of tools related to the project/field (title and link to the tool)
- Blog
  - Write blog for each video demo, github tool, etc.
  - Preferably in Markdown, though other text formats are acceptable, attach images and videos in the same directory
  - This should include:
    - Title
      - e.g. tool name or model name
    - Cover image
      - e.g. screenshot of the tool or model
    - Date of the blog post
      - e.g. 2023-08-01 12:00:00
    - Description to the usage and/or the result of the tool/demo
    - Image or video
    - link to the tool/demo
- News
  - Write news on recent publications, awards, events, etc.
  - Preferably in Markdown, though other text formats are acceptable, attach images and videos in the same directory
  - This should include:
    - Title
      - e.g. `Dr. X received the Y award` or `Paper Z was accepted to the conference W`
    - Cover image
      - e.g. photo of the award
    - Date of the news
      - e.g. `2023-08-01 12:00:00`
    - Description to the news
    - Image or video
    - link to the external website or the publication
- Hardware
  - List of significant hardware resources available in the lab
  - Preferably in Markdown, though other text formats are acceptable, attach images and videos in the same directory
  - This should include:
    - Name
      - e.g. `NVIDIA H100`, `High Performance Computing Cluster with 1024 cores`
    - Image
      - e.g. photo of the hardware
    - Description to the hardware
    - link to the external website if necessary
