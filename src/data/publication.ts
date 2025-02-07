export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2024",
    conference: "IEEE Transactions on Intelligent Vehicles",
    title: "Exploring the Potential of Multi-Modal AI for Driving Hazard Prediction",
    authors: "Korawat Charoenpitaks, Van-Quang Nguyen, Masanori Suganuma, Masahiro Takahashi, Ryoma Niihara, Takayuki Okatani",
    paperUrl: "https://arxiv.org/abs/2310.04671",
    //codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    //tldr: "Using causal discovery to find the causal structure of high-dimensional time series data.",
    //imageUrl:
    //  "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    imageUrl: "/images/DHPR.png"
  },
  {
    year: "2024",
    conference: "WACV",
    title: "SBCFormer: Lightweight Network Capable of Full-size ImageNet Classification at 1 FPS on Single Board Computers",
    authors: "Lu Xiangyong, Masanori Suganuma, Takayuki Okatani",
    //paperUrl: "https://arxiv.org/abs/2302.13095",
    //codeUrl: "https://github.com/jsmith/robust-causal-discovery",
    imageUrl: "/images/lagrangian.png"
  },
  {
    year: "2024",
    conference: "WACV",
    title: "Contextual Affinity Distillation for Image Anomaly Detection",
    authors: "Zhang Jie, Masanori Suganuma, Takayuki Okatani",
    //paperUrl: "https://arxiv.org/abs/2302.13095",
    //codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  },
  {
    year: "2023",
    conference: "IJCV",
    title: "Symmetry-aware Neural Architecture for Embodied Visual Navigation",
    authors: "Shuang Liu, Masanori Suganuma, Takayuki Okatani",
    //paperUrl: "https://arxiv.org/abs/2302.13095",
    //codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  },
  {
    year: "2023",
    conference: "CVIU",
    title: "Unsupervised domain adaptation for semantic segmentation via cross-region alignment",
    authors: "Zhijie Wang, Xing Liu, Masanori Suganuma, Takayuki Okatani",
    //paperUrl: "https://arxiv.org/abs/2302.13095",
    //codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  },
  {
    year: "2023",
    conference: "ICIP",
    title: "Accurate Single-Image Defocus Deblurring Based on Improved Integration with Defocus Map Estimation",
    authors: "Qian Ye, Masanori Suganuma, Takayuki Okatani",
    //paperUrl: "https://arxiv.org/abs/2302.13095",
    //codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  },
  {
    year: "2022",
    conference: "NeurIPS",
    title: "Bridging the Gap from Asymmetry Tricks to Decorrelation Principles in Non-contrastive Self-supervised Learning",
    authors: "Kang-Jun Liu, Masanori Suganuma, Takayuki Okatani",
    paperUrl: "https://openreview.net/pdf?id=Jz98aDK5gMW",
    //codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  },
  {
    year: "2022",
    conference: "ECCV",
    title: "GRIT: Faster and Better Image-captioning Transformer Using Dual Visual Features",
    authors: "Van-Quang Nguyen, Masanori Suganuma, Takayuki Okatani",
    paperUrl: "https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136960165.pdf",
    //codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  },
  {
    year: "2021",
    conference: "ICCV",
    title: "Matching in the Dark: A Dataset for Matching Image Pairs of Low-light Scenes",
    authors: "Wenzheng Song, Masanori Suganuma, Xing Liu, Noriyuki Shimobayashi, Daisuke Maruta, Takayuki Okatani",
    paperUrl: "https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136960165.pdf",
    //codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  },
  {
    year: "2021",
    conference: "IJCAI",
    title: "Look Wide and Interpret Twice: Improving Performance on Interactive Instruction-following Tasks",
    authors: "Van-Quang Nguyen, Masanori Suganuma, Takayuki Okatani",
    paperUrl: "https://www.ijcai.org/proceedings/2021/0128.pdf",
    //codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  },
  {
    year: "2021",
    conference: "ACCV",
    title: "Hyperparameter-Free Out-of-Distribution Detection Using Cosine Similarity",
    authors: "Engkarat Techapanurak, Masanori Suganuma, Takayuki Okatani",
    paperUrl: "https://www.ijcai.org/proceedings/2021/0128.pdf",
    //codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  },
  {
    year: "2020",
    conference: "Evolutionary Computation",
    title: "Evolution of Deep Convolutional Neural Networks Using Cartesian Genetic Programming",
    authors: "Masanori Suganuma, Masayuki Kobayashi, Shinichi Shirakawa, Tomoharu Nagao",
    //paperUrl: "https://arxiv.org/abs/1704.00764",
    //codeUrl: "https://github.com/sg-nm/Evolutionary-Autoencoders",
  },
  {
    year: "2020",
    conference: "ECCV",
    title: "Efficient Attention Mechanism for Visual Dialog that can Handle All the Interactions between Multiple Inputs",
    authors: "Van-Quang Nguyen, Masanori Suganuma, Takayuki Okatani",
    paperUrl: "https://www.ecva.net/papers/eccv_2020/papers_ECCV/papers/123690222.pdf",
    //codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  },
  {
    year: "2020",
    conference: "WACV",
    title: "Analysis and a Solution of Momentarily Missed Detection for Anchor-based Object Detectors",
    authors: "Yusuke Hosoya, Masanori Suganuma, Takayuki Okatani",
    paperUrl: "https://openaccess.thecvf.com/content_WACV_2020/html/Hosoya_Analysis_and_a_Solution_of_Momentarily_Missed_Detection_for_Anchor-based_WACV_2020_paper.html",
    //codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  },
  {
    year: "2019",
    conference: "CVPR",
    title: "Attention-based Adaptive Selection of Operations for Image Restoration in the Presence of Unknown Combined Distortions",
    authors: "Masanori Suganuma, Xing Liu, Takayuki Okatani",
    paperUrl: "https://openaccess.thecvf.com/content_CVPR_2019/html/Suganuma_Attention-Based_Adaptive_Selection_of_Operations_for_Image_Restoration_in_the_CVPR_2019_paper.html",
    codeUrl: "https://github.com/sg-nm/Operation-wise-attention-network",
  },
  {
    year: "2019",
    conference: "CVPR",
    title: "Dual Residual Networks Leveraging the Potential of Paired Operations for Image Restoration",
    authors: "Xing Liu, Masanori Suganuma, Zhun Sun, Takayuki Okatani",
    paperUrl: "https://openaccess.thecvf.com/content_CVPR_2019/html/Liu_Dual_Residual_Networks_Leveraging_the_Potential_of_Paired_Operations_for_CVPR_2019_paper.html",
    //codeUrl: "https://github.com/sg-nm/Operation-wise-attention-network",
  },
  {
    year: "2018",
    conference: "ICML",
    title: "Exploiting the Potential of Standard Convolutional Autoencoders for Image Restoration by Evolutionary Search",
    authors: "Masanori Suganuma, Mete Ozay, Takayuki Okatani",
    paperUrl: "https://proceedings.mlr.press/v80/suganuma18a.html",
    codeUrl: "https://github.com/sg-nm/Evolutionary-Autoencoders",
  },
  {
    year: "2017",
    conference: "GECCO",
    title: "A genetic programming approach to designing convolutional neural network architectures",
    authors: "Masanori Suganuma, Shinichi Shirakawa, Tomoharu Nagao",
    paperUrl: "https://arxiv.org/abs/1704.00764",
    //codeUrl: "https://github.com/sg-nm/Evolutionary-Autoencoders",
    award: "🏆 Best Paper Award",
  },
];
