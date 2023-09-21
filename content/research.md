# Research

Machine learning is a dynamic and multifaceted field that encompasses various research areas, each contributing to the broader goal of creating intelligent systems capable of learning, adapting, and evolving. Below, we explore the major research areas that define the landscape of machine learning.

## AI Theory

![AI theory](/fields/AI-theory.svg)

AI Theory is the foundational bedrock of artificial intelligence, focusing on the mathematical and computational principles that govern the behavior and capabilities of AI systems. It explores algorithms, complexity, logic, and statistical methods to understand how machines can mimic human intelligence. Research in AI Theory seeks to create models that can explain, predict, and enhance the performance of AI, ensuring robustness, efficiency, and ethical considerations.

## Computer Vision

![CV](/fields/CV.svg)

Computer Vision is the science of enabling machines to interpret and make decisions based on visual data. It involves the automatic extraction, analysis, and understanding of useful information from a single image or a sequence of images. Applications range from facial recognition and medical image analysis to autonomous driving and industrial inspection. Computer Vision combines techniques from image processing, pattern recognition, geometry, and machine learning to replicate the human ability to perceive and interpret the visual world.

### Video Understanding for Activities of Daily Living

![toyota smarthome](/fields/toyota-smarthome.png)

Activities of Daily Living (ADL) encompass the fundamental and routine tasks that individuals perform as part of their daily lives. While most research in the field of action recognition focuses on actions seen in web videos, ADL are often times more "boring", consisting of actions such as walk, drink water, watch TV. These everyday tasks are not commonly available in internet sources but are of paramount importance, especially in healthcare, gerontology, rehabilitation, and long-term care settings. ADL poses unique challenges compared to web videos that must be considered when designing models for understanding ADL videos.

Recent publications:

- [Seeing the Pose in the Pixels: Learning Pose-Aware Representations in Vision Transformers](https://scholar.google.com/citations?view_op=view_citation&citation_for_view=ZDTF5AEAAAAJ:YFjsv_pBGBYC)
- [Toyota smarthome: Real-world activities of daily living](https://scholar.google.com/citations?view_op=view_citation&citation_for_view=ZDTF5AEAAAAJ:YsMSGLbcyi4C)

Tools:

- https://project.inria.fr/toyotasmarthome/

### Can Multi-view Improve Aerial Visual Perception?

![aerial](/fields/aerial.png)

Using aerial footage from UAVs or drones for object detection and tracking is crucial in various applications, including autonomous driving, environmental monitoring, infrastructure inspection, and creating secure communities. Small items in a large background, occlusions, complicated backgrounds, and lighting and shadow fluctuations make this work difficult. Computer vision has advanced rapidly with data-hungry DNN models, but aerial data has not. Can we improve aerial view object recognition by adding other viewpoints with better visual perception?

### Incorporating human pose into vision-language models

Vision language models (such as CLIP) are trained on image-text pairs and exhibit impressive performance on many tasks, such as zero shot image classification and object detection. We have also seen that these models, trained on image-text pairs, can be adapted to videos to perform zero shot video understanding. However, these adaptations only consider the RGB and language modalities, which are not enough for many video understanding tasks (e.g. action recognition for activities of daily living videos).

## Data Science

![DS](/fields/DS.svg)

Data Science is the interdisciplinary field that uses scientific methods, algorithms, processes, and systems to extract knowledge and insights from structured and unstructured data. It encompasses statistics, data mining, machine learning, and big data technologies to analyze and interpret complex data. Data Science is vital in various industries, including healthcare, finance, retail, and government, enabling data-driven decision-making, predictive analytics, and actionable insights.

## Natural Language Processing

![NLP](/fields/NLP.svg)

Natural Language Processing (NLP) is a branch of AI that focuses on the interaction between computers and humans through natural language. It aims to enable machines to understand, interpret, generate, and respond to human language in a valuable way. NLP involves several challenges, including language modeling, parsing, sentiment analysis, machine translation, and speech recognition. It has diverse applications such as chatbots, search engines, and language translation services.

## Reinforcement Learning

![RL](/fields/RL.svg)

Reinforcement Learning (RL) is a type of machine learning where an agent learns to make decisions by interacting with an environment. The agent receives feedback in the form of rewards or penalties and aims to maximize cumulative rewards over time. RL is inspired by behavioral psychology and has applications in various domains, including robotics, game playing, finance, and healthcare. Research in RL explores algorithms, exploration-exploitation trade-offs, multi-agent systems, and real-world implementations.

## Time Series

![TS](/fields/TS.svg)

Time Series analysis involves the study of ordered, often temporal data points. It is used to analyze trends, seasonality, and patterns in data over time. Time Series analysis is crucial in various fields such as economics, finance, environmental science, and healthcare. It helps in forecasting future values, understanding underlying structures, and making informed decisions. Techniques in Time Series analysis include statistical methods, machine learning models, and frequency domain methods.

### Semi-/Un-Supervised Learning for Medical Time Series

![TFC](/fields/TFC.png)

In healthcare, medical time series data like physiological signals and vital signs are crucial for patient care but often lack sufficient labels for analysis. The challenge is to interpret this complex data with limited labeled samples. We develop semi-supervised and unsupervised learning to tackle this issue, utilizing deep learning techniques to develop robust, interpretable models. These models effectively analyze medical time series data, aiding healthcare professionals in making better decisions when fully annotated data is scarce.

Recent publications:

- [Self-Supervised Contrastive Pre-Training For Time Series via Time-Frequency Consistency](https://openreview.net/forum?id=OJ4mMfGKLN)
- [Adversarial Variational Embedding for Robust Semi-supervised Learning](https://dl.acm.org/doi/10.1145/3292500.3330966)

### Deep Learning for Brain Signal Analysis

![DL-EEG](/fields/DL_EEG.png)

Deep learning have revolutionized the field of brain signal analysis by effectively captures high-level representations from noisy EEG data, offering promising advances in neuroscience and healthcare. This project dedicate to design a set of advanced deep learning algorithms and frameworks to seize the complex patterns within EEG signals. Our models enable more accurate classification performance, better monitoring of cognitive states, and improved patient diagnosis of neurological diseases, offering a significant upgrade over conventional methods.

Recent publications:

- [A survey on deep learning-based non-invasive brain signals: recent advances and new frontiers](https://iopscience.iop.org/article/10.1088/1741-2552/abc902/meta)
- [MindID: Person Identification from Brain Waves through Attention-based Recurrent Neural Network](https://dl.acm.org/doi/10.1145/3264959)
- [Deep Learning for EEG-Based Brain–Computer Interfaces](https://doi.org/10.1142/q0282)
- [Interpretable Sparsification of Brain Graphs: Better Practices and Effective Designs for Graph Neural Networks](https://dl.acm.org/doi/abs/10.1145/3580305.3599394)

### Graph Nerual Networks for Relational Representation Learning

![raindrop](/fields/raindrop.png)

Graph Neural Networks (GNNs) have emerged as a powerful tool for learning on graph-structured data, capturing relationships that traditional neural networks often miss. The challenge in relational representation learning is to efficiently model and interpret complex, interdependent relationships within large datasets. Our research addresses this by applying GNNs to relational representation learning. Using innovative architectures and optimization techniques, these GNN-based models can automatically capture intricate dependencies within the data. Additionally, we extend this approach to uncover hidden relationships in informative time series data, such as vital signs in healthcare. In terms of cybersecurity, we've also created a model that defends GNNs against adversarial attacks.

Recent publications:

- [Interpretable Sparsification of Brain Graphs: Better Practices and Effective Designs for Graph Neural Networks](https://dl.acm.org/doi/abs/10.1145/3580305.3599394)
- [Graph-Guided Network for Irregularly Sampled Multivariate Time Series](https://openreview.net/forum?id=Kwm8I7dU-l5)
- [GNNGUARD: defending graph neural networks against adversarial attacks](https://dl.acm.org/doi/abs/10.5555/3495724.3496501)

<!--
## Grants

- Some grant
-->
