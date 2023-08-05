export default {
  title: {
    kanji: ['履歴書', '太郎'],
    furigana: ['りれきしょ', 'たろう'],
    english: 'Taro Rirekisyo',
  },
  basicInfo: {
    username: 'resume-taro',
    email: 'resumetaro@example.com',
    address: '100-0001 東京都千代田区千代田 1-2-3',
    phone: '(+81) 90-1234-5678',
  },
  education: [
    {
      school: '△△高等学校',
      location: '△△県',
      period: '2000 年 4 月 ~ 2003 年 3 月',
      degree: '高校',
      introduction: '',
    },
    {
      school: '〇〇大学',
      location: '〇〇県 〇〇市',
      period: '2003 年 4 月 ~ 2007 年 3 月',
      degree: '学士',
      introduction: '〇〇学部 〇〇学科',
    },
  ],
  experience: [
    {
      company: '株式会社 〇〇',
      location: '〇〇県',
      period: '2005 年 8 月 ~ 2005 年 9 月',
      type: 'インターン',
      role: 'Web エンジニア',
      content: {
        フロントエンド開発: [
          'React.js を使用して、商品ページにおすすめ商品スライダーを実装。',
          'サーバーから取得した商品情報を非同期で取得し、画面にリアルタイムで表示する機能を実装。',
          'レスポンシブデザインを考慮した、モバイル端末向けの UI/UX を改善。',
          'コンポーネントのテストを Jest を用いて自動化し、品質の向上に貢献。',
        ],
        バックエンド開発: [
          'Python と Django フレームワークを使用して、イベント登録機能を実装。',
          'データベース設計と統合を担当し、参加者の情報を効率的に管理するデータモデルを設計。',
          'RESTful API エンドポイントの設計と実装を行い、フロントエンドとの連携を確保。',
          'イベント詳細ページに Google Maps API を統合し、イベント会場の地図を表示する機能を追加。',
          'ユーザーの認証機能を実装し、ログイン/ログアウト機能を提供。',
        ],
      },
    },
  ],
  projects: [
    {
      title: 'E-commerce Website Redesign',
      url: 'https://github.com/resume-taro/ecommerce-website-redesign',
      introduction: 'E コマースウェブサイトのリデザイン',
      explanations: [
        '既存の E コマースウェブサイトのリデザインを担当し、ユーザーのエクスペリエンス向上に注力。',
        'React.js と Tailwind CSS を使用して、新しいデザインを実装。',
      ],
    },
    {
      title: 'Japanese Vocabulary Notebook',
      url: 'https://github.com/resume-taro/japanese-vocabulary-notebook',
      introduction: '日本語の学習者向けの単語帳アプリ',
      explanations: [
        '単語の意味検索や学習情報の記録など、学習支援機能を提供。',
        '開発には Ruby on Rails を使用し、Weblio との連携による単語検索機能を実装。',
      ],
    },
    {
      title: 'Data Visualization Dashboard',
      url: 'https://github.com/resume-taro/data-visualization-dashboard',
      introduction: 'データ可視化ダッシュボードの開発',
      explanations: [
        'グラフやチャートを使用して複数のデータセットを視覚的に表現するダッシュボードを開発。',
        'JavaScript のライブラリ D3.js を活用して、データのインタラクティブな表示を実装。',
      ],
    },
    {
      title: 'Social Media Analytics Tool',
      url: 'https://github.com/resume-taro/social-media-analytics-tool',
      introduction: 'ソーシャルメディア分析ツールの開発',
      explanations: [
        'Twitter や Instagram のデータを取得し、投稿の分析やトレンドの追跡を行うツールを開発。',
        'Python と Tweepy、Instaloader を使用して、ソーシャルメディア API との連携を実装。',
      ],
    },
    {
      title: 'Online Event Platform',
      url: 'https://github.com/resume-taro/online-event-platform',
      introduction: 'オンラインイベントの管理と参加者向けのプラットフォーム',
      explanations: [
        'オンラインイベントの登録と管理機能を実装しました。',
        '参加者がイベントに申し込むことができる機能を開発し、データベースに情報を保存。',
        '開発には Ruby on Rails と Vue.js を使用し、シームレスな UX を提供。',
      ],
    },
    {
      title: 'Autonomous Driving Camera',
      url: 'https://github.com/resume-taro/autonomous-driving-camera',
      introduction: '自動運転車のためのカメラシステム',
      explanations: [
        '自動運転車のためのカメラシステムを開発。',
        '車両周辺の映像をリアルタイムで取得し、画像処理アルゴリズムで障害物検知を行う。',
        'Python と OpenCV を用いて、高速かつ精度のある処理を実現。',
      ],
    },
  ],
  skills: {
    フロントエンド開発: 'JavaScript, React.js, HTML, CSS',
    バックエンド開発: 'Node.js, Express.js, MongoDB',
    データ分析: 'Python, Pandas, Matplotlib',
    バージョン管理: 'Git, GitHub',
    'UI / UX デザイン': 'Adobe XD, Figma',
  },
  certificates: [
    'TOEIC - スコア: 950',
    'Web 開発認定 - Udemy',
    'データサイエンススペシャリゼーション - Coursera',
  ],
}
