// 都市別の具体的なスポットと宿泊先データ
// themes: food / culture / nature / shopping / relax / adventure / photo

const CITY_DATA = {
  // ===== 国内：都市観光 =====
  tokyo: {
    name: '東京', area: 'Tokyo Japan',
    spots: [
      { name: '浅草寺・雷門', themes: ['culture', 'photo'], desc: '東京最古の寺。仲見世通りで食べ歩き' },
      { name: '東京スカイツリー', themes: ['photo', 'shopping'], desc: '展望台＋ソラマチでショッピング' },
      { name: '明治神宮', themes: ['culture', 'nature'], desc: '都心の杜で森林浴' },
      { name: '渋谷スクランブル交差点', themes: ['photo', 'shopping'], desc: '渋谷スカイから一望もおすすめ' },
      { name: '上野動物園・上野恩賜公園', themes: ['nature', 'culture'], desc: 'パンダと国立博物館エリア' },
      { name: '築地場外市場', themes: ['food', 'photo'], desc: '海鮮丼・玉子焼きの食べ歩き' },
      { name: '豊洲市場', themes: ['food'], desc: '早朝マグロ競りと寿司朝食' },
      { name: '新宿御苑', themes: ['nature', 'relax'], desc: '広大な日本・西洋・英国式庭園' },
      { name: 'お台場・チームラボプラネッツ', themes: ['photo', 'adventure'], desc: 'デジタルアートと臨海散策' },
      { name: '原宿・表参道', themes: ['shopping', 'food'], desc: '竹下通りのスイーツとブランド店' },
      { name: '銀座', themes: ['shopping', 'food'], desc: '老舗デパートと和菓子店' },
      { name: '谷中銀座商店街', themes: ['food', 'photo'], desc: 'レトロな下町散策' }
    ],
    food: [
      { name: '一蘭 新宿中央東口店', themes: ['food'], desc: '24時間営業のとんこつラーメン' },
      { name: 'すしざんまい 本陣', themes: ['food'], desc: '築地の老舗回転寿司' },
      { name: '人形町 今半 本店', themes: ['food', 'culture'], desc: '老舗のすき焼き' },
      { name: '月島もんじゃストリート', themes: ['food'], desc: 'もんじゃ焼きの聖地' }
    ],
    hotels: {
      low: [
        { name: '東横INN 東京駅新大橋前', area: '日本橋', price: '〜8,000円' },
        { name: 'UNPLAN Kagurazaka', area: '神楽坂', price: 'ドミ4,500円〜' }
      ],
      mid: [
        { name: '三井ガーデンホテル銀座プレミア', area: '銀座', price: '20,000円〜' },
        { name: 'リッチモンドホテル浅草', area: '浅草', price: '15,000円〜' }
      ],
      high: [
        { name: 'ザ・ペニンシュラ東京', area: '丸の内', price: '90,000円〜' },
        { name: 'パーク ハイアット 東京', area: '新宿', price: '80,000円〜' },
        { name: 'マンダリン オリエンタル 東京', area: '日本橋', price: '100,000円〜' }
      ]
    }
  },

  kyoto: {
    name: '京都', area: 'Kyoto Japan',
    spots: [
      { name: '清水寺', themes: ['culture', 'photo'], desc: '舞台からの眺望と二年坂・三年坂' },
      { name: '伏見稲荷大社', themes: ['culture', 'photo'], desc: '千本鳥居の朱色トンネル' },
      { name: '金閣寺（鹿苑寺）', themes: ['culture', 'photo'], desc: '黄金に輝く舎利殿' },
      { name: '嵐山・竹林の小径', themes: ['nature', 'photo'], desc: '渡月橋とトロッコ列車' },
      { name: '銀閣寺と哲学の道', themes: ['culture', 'nature'], desc: '禅寺と桜・紅葉の散策路' },
      { name: '祇園・花見小路', themes: ['culture', 'photo'], desc: '舞妓さんも歩く石畳の街' },
      { name: '錦市場', themes: ['food', 'shopping'], desc: '京の台所で食べ歩き' },
      { name: '二条城', themes: ['culture'], desc: '徳川将軍家の京都の居城' },
      { name: '貴船神社', themes: ['nature', 'culture'], desc: '川床料理と縁結び' }
    ],
    food: [
      { name: '本家尾張屋 本店', themes: ['food'], desc: '500年続く老舗の蕎麦' },
      { name: '権太呂 本店', themes: ['food'], desc: '名物・京風うどんすき' },
      { name: '%ARABICA Kyoto 嵐山', themes: ['food', 'photo'], desc: '渡月橋を望む人気カフェ' }
    ],
    hotels: {
      low: [
        { name: 'ピースホステル京都', area: '京都駅', price: 'ドミ3,500円〜' },
        { name: '東横INN京都四条烏丸', area: '四条', price: '8,000円〜' }
      ],
      mid: [
        { name: 'ホテルグランヴィア京都', area: '京都駅直結', price: '20,000円〜' },
        { name: '三井ガーデンホテル京都新町別邸', area: '新町', price: '25,000円〜' }
      ],
      high: [
        { name: 'ザ・リッツ・カールトン京都', area: '鴨川沿い', price: '120,000円〜' },
        { name: 'フォーシーズンズホテル京都', area: '東山', price: '110,000円〜' },
        { name: '柊家旅館', area: '麩屋町', price: '80,000円〜（老舗旅館）' }
      ]
    }
  },

  osaka: {
    name: '大阪', area: 'Osaka Japan',
    spots: [
      { name: '大阪城・大阪城公園', themes: ['culture', 'photo'], desc: '天守閣からの眺望' },
      { name: '道頓堀・グリコ看板', themes: ['food', 'photo'], desc: 'たこ焼き・お好み焼きの聖地' },
      { name: '通天閣・新世界', themes: ['food', 'photo'], desc: '串カツ屋台街' },
      { name: 'ユニバーサル・スタジオ・ジャパン', themes: ['adventure'], desc: '1日まるごと楽しめるテーマパーク' },
      { name: '海遊館', themes: ['nature', 'culture'], desc: 'ジンベエザメで有名な水族館' },
      { name: '心斎橋筋商店街', themes: ['shopping'], desc: '長大なアーケード' },
      { name: '梅田スカイビル空中庭園', themes: ['photo'], desc: '夜景の名所' }
    ],
    food: [
      { name: 'たこ家 道頓堀くくる', themes: ['food'], desc: '本場のたこ焼き' },
      { name: '千房 道頓堀ビル店', themes: ['food'], desc: '老舗お好み焼き' },
      { name: '北極星 心斎橋本店', themes: ['food'], desc: 'オムライス発祥の店' },
      { name: '串かつだるま 通天閣店', themes: ['food'], desc: 'ソース二度漬け禁止' }
    ],
    hotels: {
      low: [
        { name: '東横INN大阪なんば', area: 'なんば', price: '8,000円〜' },
        { name: 'ホテル中央セレーネ', area: '日本橋', price: '7,000円〜' }
      ],
      mid: [
        { name: 'ホテル日航大阪', area: '心斎橋', price: '22,000円〜' },
        { name: 'スイスホテル南海大阪', area: 'なんば直結', price: '28,000円〜' }
      ],
      high: [
        { name: 'ザ・リッツ・カールトン大阪', area: '梅田', price: '90,000円〜' },
        { name: 'コンラッド大阪', area: '中之島', price: '85,000円〜' }
      ]
    }
  },

  yokohama: {
    name: '横浜', area: 'Yokohama Japan',
    spots: [
      { name: '横浜中華街', themes: ['food', 'culture'], desc: '日本最大級のチャイナタウン' },
      { name: '山下公園', themes: ['relax', 'photo'], desc: '海沿いの開放的な公園' },
      { name: 'みなとみらい21・コスモワールド', themes: ['photo', 'adventure'], desc: '観覧車と夜景' },
      { name: '横浜赤レンガ倉庫', themes: ['shopping', 'photo'], desc: 'レトロな商業施設' },
      { name: '元町ショッピングストリート', themes: ['shopping'], desc: '上品な老舗洋品店街' },
      { name: '三溪園', themes: ['nature', 'culture'], desc: '歴史的建造物が点在する日本庭園' }
    ],
    food: [
      { name: '景珍楼 新館', themes: ['food'], desc: '中華街の老舗広東料理' },
      { name: '崎陽軒本店', themes: ['food'], desc: '名物シウマイ' }
    ],
    hotels: {
      low: [{ name: '東横INN横浜スタジアム前1', area: '関内', price: '7,500円〜' }],
      mid: [{ name: '横浜ベイホテル東急', area: 'みなとみらい', price: '20,000円〜' }],
      high: [{ name: 'ヨコハマ グランド インターコンチネンタル ホテル', area: 'みなとみらい', price: '40,000円〜' }]
    }
  },

  fukuoka: {
    name: '福岡', area: 'Fukuoka Japan',
    spots: [
      { name: '太宰府天満宮', themes: ['culture'], desc: '学問の神様。梅ヶ枝餅も名物' },
      { name: '中洲屋台街', themes: ['food', 'photo'], desc: '川沿いの名物屋台' },
      { name: '櫛田神社', themes: ['culture'], desc: '博多祇園山笠の本拠地' },
      { name: '糸島', themes: ['nature', 'photo'], desc: '海沿いカフェとフォトスポット' },
      { name: 'キャナルシティ博多', themes: ['shopping'], desc: '大型複合商業施設' }
    ],
    food: [
      { name: '一蘭 本社総本店', themes: ['food'], desc: 'とんこつラーメンの代名詞' },
      { name: '博多もつ鍋 おおやま 本店', themes: ['food'], desc: '上質なもつ鍋専門店' }
    ],
    hotels: {
      low: [{ name: '東横INN博多口駅前', area: '博多駅', price: '7,000円〜' }],
      mid: [{ name: 'ホテル日航福岡', area: '博多駅', price: '20,000円〜' }],
      high: [{ name: 'グランド ハイアット 福岡', area: 'キャナル', price: '40,000円〜' }]
    }
  },

  // ===== 国内：ビーチリゾート =====
  okinawa_main: {
    name: '沖縄本島', area: 'Okinawa Japan',
    spots: [
      { name: '美ら海水族館', themes: ['nature', 'culture'], desc: 'ジンベエザメの巨大水槽' },
      { name: '首里城公園', themes: ['culture'], desc: '琉球王国の象徴' },
      { name: '万座毛', themes: ['nature', 'photo'], desc: '象の鼻のような断崖絶壁' },
      { name: '青の洞窟（真栄田岬）', themes: ['adventure', 'photo'], desc: 'シュノーケル＆ダイビングの聖地' },
      { name: '古宇利島・ハートロック', themes: ['photo', 'relax'], desc: '恋の島と絶景ドライブ' },
      { name: '国際通り', themes: ['shopping', 'food'], desc: '那覇のメインストリート' },
      { name: '瀬長島ウミカジテラス', themes: ['photo', 'food'], desc: '飛行機を見ながらカフェ' }
    ],
    food: [
      { name: 'ステーキハウス88 国際通り店', themes: ['food'], desc: '沖縄ステーキの定番' },
      { name: '首里そば', themes: ['food'], desc: '名物・沖縄そば' }
    ],
    hotels: {
      low: [{ name: 'ホテル エスティネート 那覇', area: '那覇', price: '8,000円〜' }],
      mid: [{ name: 'ANAインターコンチネンタル万座ビーチリゾート', area: '恩納村', price: '30,000円〜' }],
      high: [
        { name: 'ザ・ブセナテラス', area: '名護', price: '60,000円〜' },
        { name: 'ハレクラニ沖縄', area: '恩納村', price: '80,000円〜' }
      ]
    }
  },

  miyako: {
    name: '宮古島', area: 'Miyakojima Okinawa',
    spots: [
      { name: '与那覇前浜ビーチ', themes: ['relax', 'photo'], desc: '東洋一美しいと称される白砂' },
      { name: '伊良部大橋', themes: ['photo', 'adventure'], desc: '無料橋として日本最長' },
      { name: '砂山ビーチ', themes: ['photo', 'relax'], desc: '砂丘越えのプライベート感' },
      { name: '東平安名崎', themes: ['nature', 'photo'], desc: '岬と灯台、断崖絶壁' },
      { name: '池間大橋', themes: ['photo', 'nature'], desc: 'エメラルドグリーンの海上ドライブ' }
    ],
    food: [
      { name: '居酒屋ぽうちゃたつや', themes: ['food'], desc: '宮古牛と地魚' }
    ],
    hotels: {
      low: [{ name: 'ホテルさくら', area: '平良', price: '8,000円〜' }],
      mid: [{ name: '宮古島東急ホテル&リゾーツ', area: '与那覇前浜', price: '30,000円〜' }],
      high: [{ name: 'シギラベイサイドスイート アラマンダ', area: 'シギラリゾート', price: '70,000円〜' }]
    }
  },

  ishigaki: {
    name: '石垣島', area: 'Ishigaki Okinawa',
    spots: [
      { name: '川平湾', themes: ['photo', 'nature'], desc: 'グラスボートで海中を観察' },
      { name: '玉取崎展望台', themes: ['photo'], desc: '島を見渡す絶景' },
      { name: '米原ビーチ', themes: ['adventure', 'relax'], desc: 'シュノーケルポイント' },
      { name: '平久保崎灯台', themes: ['photo', 'nature'], desc: '島最北端の絶景岬' }
    ],
    food: [
      { name: '炭火焼肉やまもと', themes: ['food'], desc: '石垣牛の名店' }
    ],
    hotels: {
      low: [{ name: 'ホテル パティーナ石垣島', area: '市街地', price: '7,000円〜' }],
      mid: [{ name: 'グランヴィリオリゾート石垣島', area: '南ぬ浜', price: '20,000円〜' }],
      high: [{ name: 'ANAインターコンチネンタル石垣リゾート', area: '真栄里', price: '50,000円〜' }]
    }
  },

  // ===== 国内：山・自然 =====
  hokkaido: {
    name: '北海道（札幌・富良野）', area: 'Hokkaido Japan',
    spots: [
      { name: '大通公園・さっぽろテレビ塔', themes: ['photo', 'relax'], desc: '札幌の中心。雪まつりの会場' },
      { name: '藻岩山展望台', themes: ['photo'], desc: '日本新三大夜景' },
      { name: 'ファーム富田（富良野）', themes: ['nature', 'photo'], desc: 'ラベンダー畑の絶景' },
      { name: '青い池（美瑛）', themes: ['photo', 'nature'], desc: '神秘的なコバルトブルー' },
      { name: '小樽運河', themes: ['photo', 'culture'], desc: 'ガス灯と石造倉庫のレトロ街' },
      { name: '定山渓温泉', themes: ['relax'], desc: '札幌から1時間の温泉郷' }
    ],
    food: [
      { name: 'すみれ 札幌すすきの店', themes: ['food'], desc: '味噌ラーメンの名店' },
      { name: 'だるま 本店（ジンギスカン）', themes: ['food'], desc: '老舗ジンギスカン' }
    ],
    hotels: {
      low: [{ name: '東横INN札幌すすきの交差点', area: 'すすきの', price: '7,500円〜' }],
      mid: [{ name: 'JRタワーホテル日航札幌', area: '札幌駅直結', price: '25,000円〜' }],
      high: [{ name: 'ザ ウィンザーホテル洞爺リゾート＆スパ', area: '洞爺湖', price: '60,000円〜' }]
    }
  },

  kamikochi: {
    name: '長野・上高地', area: 'Kamikochi Nagano Japan',
    spots: [
      { name: '河童橋', themes: ['photo', 'nature'], desc: '上高地の象徴・穂高連峰を望む' },
      { name: '大正池', themes: ['photo', 'nature'], desc: '焼岳と立ち枯れ木の幻想風景' },
      { name: '明神池', themes: ['nature'], desc: '穂高神社奥宮の神秘の池' },
      { name: '松本城', themes: ['culture', 'photo'], desc: '現存12天守の国宝' },
      { name: '善光寺', themes: ['culture'], desc: '無宗派の名刹' }
    ],
    food: [{ name: '上高地食堂', themes: ['food'], desc: '山賊焼定食' }],
    hotels: {
      low: [{ name: '上高地アルペンホテル', area: '上高地', price: '15,000円〜' }],
      mid: [{ name: '上高地温泉ホテル', area: '上高地', price: '25,000円〜' }],
      high: [{ name: '上高地帝国ホテル', area: '上高地', price: '60,000円〜' }]
    }
  },

  yakushima: {
    name: '屋久島', area: 'Yakushima Japan',
    spots: [
      { name: '縄文杉', themes: ['nature', 'adventure'], desc: '往復10時間のトレッキング' },
      { name: '白谷雲水峡', themes: ['nature', 'photo'], desc: 'もののけ姫の森のモデル' },
      { name: 'ヤクスギランド', themes: ['nature'], desc: '初心者でも歩ける屋久杉の森' },
      { name: '千尋の滝', themes: ['nature', 'photo'], desc: '巨大な一枚岩を流れる滝' }
    ],
    food: [{ name: 'お食事処 やくしま', themes: ['food'], desc: 'トビウオ料理' }],
    hotels: {
      low: [{ name: '田代別館', area: '宮之浦', price: '10,000円〜' }],
      mid: [{ name: '屋久島いわさきホテル', area: '尾之間', price: '25,000円〜' }],
      high: [{ name: 'サンカラ ホテル&スパ 屋久島', area: '麦生', price: '60,000円〜' }]
    }
  },

  // ===== 国内：温泉地 =====
  hakone: {
    name: '箱根', area: 'Hakone Japan',
    spots: [
      { name: '芦ノ湖・箱根海賊船', themes: ['photo', 'nature'], desc: '富士山を望むクルーズ' },
      { name: '大涌谷', themes: ['nature', 'photo'], desc: '黒たまごと噴煙の谷' },
      { name: '箱根神社', themes: ['culture', 'photo'], desc: '芦ノ湖の平和の鳥居' },
      { name: '彫刻の森美術館', themes: ['culture', 'photo'], desc: '野外アートと温泉足湯' },
      { name: 'ポーラ美術館', themes: ['culture'], desc: '印象派コレクションと自然' },
      { name: '箱根湯本商店街', themes: ['food', 'shopping'], desc: '温泉まんじゅうとお土産' }
    ],
    food: [{ name: '田むら銀かつ亭', themes: ['food'], desc: '名物・豆腐かつ煮' }],
    hotels: {
      low: [{ name: '箱根の森おかだ別館 静雲荘', area: '湯本', price: '12,000円〜' }],
      mid: [{ name: 'ホテルおかだ', area: '湯本', price: '20,000円〜' }],
      high: [
        { name: '富士屋ホテル', area: '宮ノ下', price: '45,000円〜' },
        { name: '強羅花壇', area: '強羅', price: '80,000円〜' }
      ]
    }
  },

  kusatsu: {
    name: '草津温泉', area: 'Kusatsu Onsen Japan',
    spots: [
      { name: '湯畑', themes: ['photo', 'culture'], desc: '草津のシンボル。湯滝のライトアップも' },
      { name: '西の河原公園', themes: ['nature', 'relax'], desc: '広大な露天風呂と散策路' },
      { name: '熱乃湯（湯もみショー）', themes: ['culture'], desc: '伝統の湯もみと太鼓' },
      { name: '白根山', themes: ['nature', 'adventure'], desc: '火山湖と高原トレッキング' }
    ],
    food: [{ name: '頑固オヤジのらーめん屋', themes: ['food'], desc: '味噌ラーメン' }],
    hotels: {
      low: [{ name: 'ホテルニュー紅葉', area: '湯畑近く', price: '10,000円〜' }],
      mid: [{ name: '草津ナウリゾートホテル', area: '草津', price: '20,000円〜' }],
      high: [{ name: '草津温泉 奈良屋', area: '湯畑徒歩1分', price: '40,000円〜' }]
    }
  },

  yufuin: {
    name: '由布院', area: 'Yufuin Japan',
    spots: [
      { name: '金鱗湖', themes: ['photo', 'nature'], desc: '朝霧の幻想風景' },
      { name: '湯の坪街道', themes: ['food', 'shopping'], desc: '食べ歩きと雑貨店' },
      { name: '由布岳', themes: ['nature', 'adventure'], desc: '豊後富士と呼ばれる名峰' },
      { name: '由布院フローラルヴィレッジ', themes: ['photo'], desc: '英国コッツウォルズ風の街並み' }
    ],
    food: [{ name: '茶寮 だんご汁 ひびき', themes: ['food'], desc: '郷土料理だんご汁' }],
    hotels: {
      low: [{ name: '由布院ことぶき花の庄', area: '由布院駅近く', price: '15,000円〜' }],
      mid: [{ name: '山のホテル夢想園', area: '川南', price: '30,000円〜' }],
      high: [
        { name: '亀の井別荘', area: '由布院', price: '60,000円〜' },
        { name: '山荘 無量塔', area: '塚原', price: '80,000円〜' }
      ]
    }
  },

  beppu: {
    name: '別府', area: 'Beppu Japan',
    spots: [
      { name: '別府地獄めぐり（海地獄）', themes: ['photo', 'nature'], desc: '7つの地獄を巡る観光' },
      { name: '鉄輪温泉・湯けむり展望台', themes: ['photo', 'relax'], desc: '街中から立ち上る湯けむり' },
      { name: '竹瓦温泉', themes: ['culture'], desc: 'レトロな共同浴場と砂湯' }
    ],
    food: [{ name: 'とよ常 本店', themes: ['food'], desc: '名物・特上天丼' }],
    hotels: {
      low: [{ name: 'ホテルニューツルタ', area: '北浜', price: '10,000円〜' }],
      mid: [{ name: '亀の井ホテル別府', area: '北浜', price: '18,000円〜' }],
      high: [{ name: '別府温泉 杉乃井ホテル', area: '観海寺', price: '30,000円〜' }]
    }
  },

  // ===== 海外アジア =====
  seoul: {
    name: 'ソウル', area: 'Seoul South Korea',
    spots: [
      { name: '景福宮', themes: ['culture', 'photo'], desc: '王朝時代の正宮。守門将交代式' },
      { name: '北村韓屋村', themes: ['photo', 'culture'], desc: '伝統的な韓屋の街並み' },
      { name: '明洞', themes: ['shopping', 'food'], desc: 'コスメと屋台グルメ' },
      { name: '東大門デザインプラザ・市場', themes: ['shopping'], desc: '深夜まで賑わう問屋街' },
      { name: 'Nソウルタワー', themes: ['photo'], desc: '南山頂上の展望タワー' },
      { name: '梨泰院', themes: ['food'], desc: '多国籍グルメとカフェ' }
    ],
    food: [
      { name: '土俗村 参鶏湯', themes: ['food'], desc: '行列必至の名店' },
      { name: '広蔵市場', themes: ['food'], desc: '屋台でユッケ・ピンデトッ' }
    ],
    hotels: {
      low: [{ name: 'ホテル スカイパーク 明洞3', area: '明洞', price: '8,000円〜' }],
      mid: [{ name: 'フォーポインツ バイ シェラトン 明洞', area: '明洞', price: '20,000円〜' }],
      high: [
        { name: 'ロッテホテル ソウル', area: '小公洞', price: '40,000円〜' },
        { name: 'シグニエル ソウル', area: '蚕室', price: '60,000円〜' }
      ]
    }
  },

  taipei: {
    name: '台北', area: 'Taipei Taiwan',
    spots: [
      { name: '台北101', themes: ['photo', 'shopping'], desc: '展望台と高級モール' },
      { name: '九份老街', themes: ['photo', 'food'], desc: '千と千尋の世界観の山街' },
      { name: '士林夜市', themes: ['food', 'photo'], desc: '台湾最大級の夜市' },
      { name: '故宮博物院', themes: ['culture'], desc: '中国美術品の世界的コレクション' },
      { name: '迪化街', themes: ['shopping', 'culture'], desc: 'レトロな問屋街・乾物市' },
      { name: '中正紀念堂', themes: ['culture', 'photo'], desc: '衛兵交代式が見もの' }
    ],
    food: [
      { name: '鼎泰豊 信義店', themes: ['food'], desc: '世界的に有名な小籠包' },
      { name: '阿宗麺線 西門店', themes: ['food'], desc: '本場の麺線（カキそうめん）' }
    ],
    hotels: {
      low: [{ name: 'シーザーパークホテル台北中山', area: '中山', price: '8,000円〜' }],
      mid: [{ name: 'ハワードプラザホテル台北', area: '大安', price: '18,000円〜' }],
      high: [{ name: 'マンダリン オリエンタル 台北', area: '松山', price: '50,000円〜' }]
    }
  },

  bangkok: {
    name: 'バンコク', area: 'Bangkok Thailand',
    spots: [
      { name: 'ワット・ポー（涅槃寺）', themes: ['culture', 'photo'], desc: '巨大な寝釈迦仏' },
      { name: '王宮（グランドパレス）', themes: ['culture', 'photo'], desc: 'エメラルド寺院' },
      { name: 'ワット・アルン（暁の寺）', themes: ['culture', 'photo'], desc: 'チャオプラヤ川沿いの仏塔' },
      { name: 'カオサン通り', themes: ['food', 'photo'], desc: 'バックパッカーの聖地' },
      { name: 'チャトチャック・ウィークエンドマーケット', themes: ['shopping'], desc: '巨大週末市' },
      { name: 'アジアティーク・ザ・リバーフロント', themes: ['shopping', 'food'], desc: '川沿いナイトマーケット' }
    ],
    food: [
      { name: 'ティップサマイ', themes: ['food'], desc: '行列のパッタイ専門店' },
      { name: 'クルアアプソーン', themes: ['food'], desc: '老舗の本格タイ料理' }
    ],
    hotels: {
      low: [{ name: 'イビス バンコク リバーサイド', area: 'リバーサイド', price: '5,000円〜' }],
      mid: [{ name: 'バンヤンツリー バンコク', area: 'サトーン', price: '20,000円〜' }],
      high: [{ name: 'マンダリン オリエンタル バンコク', area: 'リバーサイド', price: '60,000円〜' }]
    }
  },

  // ===== 海外ヨーロッパ =====
  paris: {
    name: 'パリ', area: 'Paris France',
    spots: [
      { name: 'エッフェル塔', themes: ['photo', 'culture'], desc: 'パリの象徴。夜のライトアップ必見' },
      { name: 'ルーヴル美術館', themes: ['culture'], desc: 'モナリザ・サモトラケのニケ' },
      { name: 'ノートルダム大聖堂', themes: ['culture', 'photo'], desc: 'シテ島の歴史的大聖堂' },
      { name: '凱旋門・シャンゼリゼ通り', themes: ['shopping', 'photo'], desc: '世界一美しい大通り' },
      { name: 'モンマルトル・サクレクール寺院', themes: ['photo', 'culture'], desc: '芸術家の丘' },
      { name: 'オルセー美術館', themes: ['culture'], desc: '印象派コレクションの殿堂' },
      { name: 'ヴェルサイユ宮殿', themes: ['culture', 'photo'], desc: '日帰り絶対おすすめ' }
    ],
    food: [
      { name: 'Café de Flore', themes: ['food', 'culture'], desc: 'サン＝ジェルマンの老舗カフェ' },
      { name: 'Bouillon Pigalle', themes: ['food'], desc: '手頃な価格の伝統ビストロ' }
    ],
    hotels: {
      low: [{ name: 'Generator Paris', area: '10区', price: 'ドミ4,000円〜' }],
      mid: [{ name: 'Hotel Daniel', area: '8区', price: '30,000円〜' }],
      high: [
        { name: 'The Ritz Paris', area: 'ヴァンドーム広場', price: '180,000円〜' },
        { name: 'Four Seasons George V', area: '8区', price: '200,000円〜' }
      ]
    }
  },

  rome: {
    name: 'ローマ', area: 'Rome Italy',
    spots: [
      { name: 'コロッセオ', themes: ['culture', 'photo'], desc: '古代ローマの円形闘技場' },
      { name: 'バチカン市国・サンピエトロ大聖堂', themes: ['culture'], desc: 'カトリックの総本山' },
      { name: 'トレヴィの泉', themes: ['photo', 'culture'], desc: 'コインを投げて再訪を願う' },
      { name: 'スペイン広場', themes: ['photo', 'shopping'], desc: '映画ローマの休日の舞台' },
      { name: 'パンテオン', themes: ['culture', 'photo'], desc: '完全保存された古代神殿' },
      { name: 'ナヴォーナ広場', themes: ['photo', 'food'], desc: '彫刻の噴水と広場のカフェ' }
    ],
    food: [
      { name: "Da Enzo al 29", themes: ['food'], desc: 'トラステヴェレの人気トラットリア' },
      { name: 'Pizzarium', themes: ['food'], desc: '量り売りの絶品ピザ' }
    ],
    hotels: {
      low: [{ name: 'The RomeHello', area: 'テルミニ', price: 'ドミ4,500円〜' }],
      mid: [{ name: 'Hotel Artemide', area: 'テルミニ', price: '25,000円〜' }],
      high: [{ name: 'Hotel Hassler Roma', area: 'スペイン広場', price: '80,000円〜' }]
    }
  },

  barcelona: {
    name: 'バルセロナ', area: 'Barcelona Spain',
    spots: [
      { name: 'サグラダ・ファミリア', themes: ['culture', 'photo'], desc: 'ガウディ未完の大聖堂' },
      { name: 'グエル公園', themes: ['photo', 'nature'], desc: 'モザイクタイルの公園' },
      { name: 'カサ・バトリョ', themes: ['culture', 'photo'], desc: 'ガウディの邸宅建築' },
      { name: 'ランブラス通り・ボケリア市場', themes: ['food', 'shopping'], desc: '生ハム・タパス・フルーツジュース' },
      { name: 'ゴシック地区', themes: ['culture', 'photo'], desc: '中世の路地と大聖堂' },
      { name: 'バルセロネータビーチ', themes: ['relax', 'food'], desc: 'シーフードと地中海' }
    ],
    food: [
      { name: 'Cervecería Catalana', themes: ['food'], desc: '人気のタパスバー' }
    ],
    hotels: {
      low: [{ name: 'Generator Barcelona', area: 'グラシア', price: 'ドミ4,500円〜' }],
      mid: [{ name: 'H10 Madison', area: 'ゴシック地区', price: '25,000円〜' }],
      high: [{ name: 'Hotel Arts Barcelona', area: '海岸', price: '70,000円〜' }]
    }
  },

  // ===== 海外アメリカ =====
  newyork: {
    name: 'ニューヨーク', area: 'New York USA',
    spots: [
      { name: '自由の女神（リバティ島）', themes: ['photo', 'culture'], desc: 'フェリーで上陸' },
      { name: 'セントラルパーク', themes: ['nature', 'relax'], desc: 'マンハッタンの巨大な緑地' },
      { name: 'タイムズスクエア', themes: ['photo', 'shopping'], desc: '眠らない交差点' },
      { name: 'エンパイア・ステート・ビル', themes: ['photo'], desc: '夜景の定番' },
      { name: 'メトロポリタン美術館', themes: ['culture'], desc: '世界三大美術館の一つ' },
      { name: 'MoMA', themes: ['culture'], desc: '近代美術の殿堂' },
      { name: 'ブルックリン橋', themes: ['photo'], desc: '徒歩で渡れる名橋' },
      { name: '5番街', themes: ['shopping'], desc: 'ハイブランドの並ぶ通り' }
    ],
    food: [
      { name: 'Katz\'s Delicatessen', themes: ['food'], desc: '映画にも登場した老舗パストラミ' },
      { name: 'Joe\'s Pizza', themes: ['food'], desc: 'NYピザの代名詞' }
    ],
    hotels: {
      low: [{ name: 'The Pod Hotel Times Square', area: 'ミッドタウン', price: '15,000円〜' }],
      mid: [{ name: 'Aloft New York Manhattan Downtown', area: 'ダウンタウン', price: '30,000円〜' }],
      high: [{ name: 'The Plaza', area: '5番街', price: '120,000円〜' }]
    }
  },

  hawaii: {
    name: 'ハワイ・オアフ島', area: 'Oahu Hawaii',
    spots: [
      { name: 'ワイキキビーチ', themes: ['relax', 'photo'], desc: '世界的に有名なビーチ' },
      { name: 'ダイヤモンドヘッド', themes: ['adventure', 'photo'], desc: '頂上から絶景の登山' },
      { name: 'ハナウマ湾', themes: ['adventure', 'nature'], desc: 'シュノーケルの聖地' },
      { name: 'カイルア・ラニカイビーチ', themes: ['relax', 'photo'], desc: '世界最高峰の白砂ビーチ' },
      { name: 'ノースショア', themes: ['adventure', 'food'], desc: 'サーフィンとガーリックシュリンプ' },
      { name: 'アラモアナセンター', themes: ['shopping'], desc: '世界最大級の屋外モール' },
      { name: '真珠湾・アリゾナ記念館', themes: ['culture'], desc: '歴史を学ぶ' }
    ],
    food: [
      { name: 'Eggs \'n Things Waikiki', themes: ['food'], desc: '名物パンケーキ' },
      { name: 'Giovanni\'s Shrimp Truck', themes: ['food'], desc: 'ガーリックシュリンプの行列店' }
    ],
    hotels: {
      low: [{ name: 'Aqua Skyline at Island Colony', area: 'ワイキキ', price: '15,000円〜' }],
      mid: [{ name: 'Sheraton Waikiki', area: 'ワイキキ', price: '40,000円〜' }],
      high: [{ name: 'Halekulani', area: 'ワイキキ', price: '90,000円〜' }]
    }
  }
};

// 行き先タイプごとの都市リスト
const DEST_CITIES = {
  city: ['tokyo', 'kyoto', 'osaka', 'yokohama', 'fukuoka'],
  beach: ['okinawa_main', 'miyako', 'ishigaki'],
  mountain: ['hokkaido', 'kamikochi', 'yakushima'],
  hotspring: ['hakone', 'kusatsu', 'yufuin', 'beppu'],
  overseas_asia: ['seoul', 'taipei', 'bangkok'],
  overseas_europe: ['paris', 'rome', 'barcelona'],
  overseas_america: ['newyork', 'hawaii']
};

const BUDGETS = {
  low: { hotel: 'ゲストハウス・ビジネスホテル', meal: 'チェーン店・ローカル食堂', transport: '公共交通中心', tip: '駅近の格安宿、ランチ重視で外食コスト圧縮' },
  mid: { hotel: '中堅シティホテル・温泉旅館', meal: '名物レストラン中心', transport: '電車＋必要時タクシー', tip: '事前予約で割引活用、メリハリある食事配分' },
  high: { hotel: '高級リゾート・ラグジュアリーホテル', meal: '星付き・有名店ディナー', transport: 'ハイヤー・ファースト/ビジネス', tip: 'ホテルのコンシェルジュサービスを最大活用' }
};

const SEASON_TIPS = {
  spring: ['桜・花見の名所をチェック', '寒暖差があるので羽織る一枚を', '花粉対策を忘れずに'],
  summer: ['日焼け止め・帽子・水分補給は必須', '夕立に備えて折りたたみ傘', '冷房対策の薄手カーディガン'],
  autumn: ['紅葉の見頃カレンダーを確認', '朝晩の冷え込みに上着を', '行楽シーズンは混雑回避の早朝行動'],
  winter: ['厚手のアウター・手袋・カイロ', '路面凍結に注意した靴選び', '空気乾燥対策のリップ・保湿']
};

const PARTY_TIPS = {
  solo: '一人時間を満喫できるカフェや本屋を組み込むと◎',
  couple: 'サンセットや夜景など、ロマンチックな時間帯を狙おう',
  family: 'お子様メニューやベビーカー対応スポットを事前確認',
  friends: '盛り上がれるアクティビティとSNS映えスポットを多めに'
};
