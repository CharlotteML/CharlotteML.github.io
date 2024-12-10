---
date: 2024-12-09 12:00:00
---

# "Medformer: A Multi-Granularity Patching Transformer for Medical Time-Series Classification" is accepted in NeurIPS 2024

Authored by **Yihe Wang**, **Nan Huang**, **Taida Li**, Yujun Yan, and **Xiang Zhang**. The paper is available at https://neurips.cc/virtual/2024/poster/93940.

<!-- more -->

Medformer is a newly developed Transformer-based model for medical time series classification, incorporating multi-granularity features processing. It comes with following key innovations:

- _Cross-Channel Patching_: Exploits inter-channel correlations to capture complex relationships in multi-channel data.
- _Multi-Granularity Embedding_: Extracts features at various scales to identify patterns across multiple time scales.
- _Two-Stage Multi-Granularity Self-Attention_: Utilizes intra-granularity and inter-granularity self-attention mechanisms to learn features within each granularity and their relationships across granularities.
