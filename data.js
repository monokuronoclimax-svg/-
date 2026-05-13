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
  },

  // ===== 追加：国内都市 =====
  nagoya: {
    name: '名古屋', area: 'Nagoya Japan',
    spots: [
      { name: '名古屋城', themes: ['culture', 'photo'], desc: '金鯱で有名な名城' },
      { name: '熱田神宮', themes: ['culture'], desc: '草薙剣を祀る格式高い神社' },
      { name: 'オアシス21', themes: ['photo', 'shopping'], desc: '水の宇宙船と栄の夜景' },
      { name: 'トヨタ産業技術記念館', themes: ['culture', 'adventure'], desc: '体験型の博物館' },
      { name: 'ノリタケの森', themes: ['culture', 'photo'], desc: '陶磁器の工場跡地公園' }
    ],
    food: [
      { name: '矢場とん 矢場町本店', themes: ['food'], desc: '名物・味噌カツ' },
      { name: 'ひつまぶし 名古屋備長 エスカ店', themes: ['food'], desc: '名古屋名物のひつまぶし' },
      { name: '世界の山ちゃん 本店', themes: ['food'], desc: '幻の手羽先' }
    ],
    hotels: {
      low: [{ name: '東横INN名古屋駅桜通口本館', area: '名古屋駅', price: '7,500円〜' }],
      mid: [{ name: 'ホテルナゴヤキャッスル', area: '名古屋城近く', price: '20,000円〜' }],
      high: [{ name: '名古屋マリオットアソシアホテル', area: '名古屋駅直結', price: '40,000円〜' }]
    }
  },

  kobe: {
    name: '神戸', area: 'Kobe Japan',
    spots: [
      { name: '北野異人館街', themes: ['culture', 'photo'], desc: '明治の洋館が並ぶ街並み' },
      { name: 'メリケンパーク・神戸ポートタワー', themes: ['photo', 'relax'], desc: '港の夜景の名所' },
      { name: '南京町（神戸中華街）', themes: ['food', 'culture'], desc: '食べ歩きグルメ' },
      { name: '六甲山・摩耶山掬星台', themes: ['photo', 'nature'], desc: '1000万ドルの夜景' },
      { name: '有馬温泉（市内から30分）', themes: ['relax'], desc: '金泉・銀泉の名湯' }
    ],
    food: [
      { name: 'ステーキランド神戸館', themes: ['food'], desc: '本場の神戸ビーフ鉄板焼' },
      { name: '老祥記', themes: ['food'], desc: '南京町の名物豚まん' }
    ],
    hotels: {
      low: [{ name: '東横INN神戸三ノ宮I', area: '三宮', price: '8,000円〜' }],
      mid: [{ name: '神戸メリケンパークオリエンタルホテル', area: 'メリケンパーク', price: '22,000円〜' }],
      high: [{ name: 'ホテル ラ・スイート神戸ハーバーランド', area: 'ハーバーランド', price: '45,000円〜' }]
    }
  },

  kanazawa: {
    name: '金沢', area: 'Kanazawa Japan',
    spots: [
      { name: '兼六園', themes: ['nature', 'culture', 'photo'], desc: '日本三名園のひとつ' },
      { name: '金沢21世紀美術館', themes: ['culture', 'photo'], desc: 'スイミング・プール作品で有名' },
      { name: 'ひがし茶屋街', themes: ['photo', 'culture'], desc: '格子戸の続く伝統的街並み' },
      { name: '近江町市場', themes: ['food'], desc: '海鮮丼の宝庫' },
      { name: '金沢城公園', themes: ['culture'], desc: '加賀百万石の居城跡' },
      { name: '妙立寺（忍者寺）', themes: ['culture', 'adventure'], desc: '仕掛け満載の寺' }
    ],
    food: [
      { name: '回転寿司 もりもり寿し 近江町店', themes: ['food'], desc: '日本海の新鮮ネタ' },
      { name: '茶房 一笑', themes: ['food'], desc: 'ひがし茶屋街の和カフェ' }
    ],
    hotels: {
      low: [{ name: '東横INN金沢駅東口', area: '金沢駅', price: '8,000円〜' }],
      mid: [{ name: 'ホテル日航金沢', area: '金沢駅', price: '20,000円〜' }],
      high: [{ name: '金沢白鳥路 ホテル山楽', area: '兼六園近く', price: '35,000円〜' }]
    }
  },

  hiroshima: {
    name: '広島', area: 'Hiroshima Japan',
    spots: [
      { name: '原爆ドーム・平和記念公園', themes: ['culture'], desc: '世界遺産。平和への祈り' },
      { name: '厳島神社（宮島）', themes: ['culture', 'photo', 'nature'], desc: '海に浮かぶ大鳥居' },
      { name: '広島城', themes: ['culture'], desc: '鯉城と呼ばれる名城' },
      { name: '縮景園', themes: ['nature', 'relax'], desc: '広島藩主の庭園' }
    ],
    food: [
      { name: 'みっちゃん総本店 八丁堀店', themes: ['food'], desc: '広島お好み焼き発祥の店' },
      { name: 'あなごめし うえの 宮島口本店', themes: ['food'], desc: '駅弁発祥の名物あなご飯' }
    ],
    hotels: {
      low: [{ name: '東横INN広島駅前大橋南', area: '広島駅', price: '7,500円〜' }],
      mid: [{ name: 'ANAクラウンプラザホテル広島', area: '中心部', price: '20,000円〜' }],
      high: [{ name: 'シェラトングランドホテル広島', area: '広島駅直結', price: '35,000円〜' }]
    }
  },

  kamakura: {
    name: '鎌倉', area: 'Kamakura Japan',
    spots: [
      { name: '鶴岡八幡宮', themes: ['culture'], desc: '鎌倉のシンボル' },
      { name: '高徳院 鎌倉大仏', themes: ['culture', 'photo'], desc: '青空の下の大仏様' },
      { name: '長谷寺', themes: ['nature', 'photo'], desc: 'あじさいと海の眺望' },
      { name: '小町通り', themes: ['food', 'shopping'], desc: '食べ歩きとお土産屋' },
      { name: '由比ヶ浜・七里ヶ浜', themes: ['relax', 'photo'], desc: 'スラムダンクの聖地踏切も近く' }
    ],
    food: [
      { name: 'こ寿々 鎌倉本店', themes: ['food'], desc: '名物わらび餅と蕎麦' },
      { name: 'bills 七里ヶ浜', themes: ['food', 'photo'], desc: '世界一の朝食パンケーキ' }
    ],
    hotels: {
      low: [{ name: 'WeBase 鎌倉', area: '由比ヶ浜', price: 'ドミ5,000円〜' }],
      mid: [{ name: '鎌倉プリンスホテル', area: '七里ヶ浜', price: '25,000円〜' }],
      high: [{ name: 'KAMAKURA HOTEL', area: '鎌倉駅近く', price: '50,000円〜' }]
    }
  },

  // ===== 追加：山・自然 =====
  karuizawa: {
    name: '軽井沢', area: 'Karuizawa Japan',
    spots: [
      { name: '旧軽井沢銀座通り', themes: ['shopping', 'food'], desc: '老舗ジャムやベーカリー' },
      { name: '雲場池', themes: ['nature', 'photo'], desc: '紅葉と新緑の名所' },
      { name: '白糸の滝', themes: ['nature', 'photo'], desc: '幻想的なカーテン状の滝' },
      { name: '軽井沢・プリンスショッピングプラザ', themes: ['shopping'], desc: '巨大アウトレット' },
      { name: '石の教会・内村鑑三記念堂', themes: ['culture', 'photo'], desc: '自然と一体化した名建築' }
    ],
    food: [
      { name: '川上庵 軽井沢 本店', themes: ['food'], desc: 'ハイセンスな蕎麦店' }
    ],
    hotels: {
      low: [{ name: 'ホテル軽井沢1130', area: '中軽井沢', price: '10,000円〜' }],
      mid: [{ name: '軽井沢マリオットホテル', area: '南軽井沢', price: '25,000円〜' }],
      high: [
        { name: '星のや軽井沢', area: '中軽井沢', price: '70,000円〜' },
        { name: 'ホテル鹿島ノ森', area: '旧軽井沢', price: '40,000円〜' }
      ]
    }
  },

  shirakawago: {
    name: '白川郷・五箇山', area: 'Shirakawago Japan',
    spots: [
      { name: '白川郷合掌造り集落', themes: ['culture', 'photo'], desc: '世界遺産の合掌造り' },
      { name: '城山天守閣展望台', themes: ['photo'], desc: '集落全景のビュースポット' },
      { name: '和田家', themes: ['culture'], desc: '国指定重要文化財の合掌造り' },
      { name: '五箇山相倉合掌造り集落', themes: ['culture', 'nature'], desc: '静かな世界遺産集落' }
    ],
    food: [
      { name: '蕎麦正 まつい', themes: ['food'], desc: '挽きたての手打ち蕎麦' }
    ],
    hotels: {
      low: [{ name: '民宿 大田屋', area: '白川郷', price: '10,000円〜' }],
      mid: [{ name: '白川郷の湯', area: '白川郷', price: '20,000円〜' }],
      high: [{ name: '合掌乃宿 孫右ヱ門', area: '白川郷', price: '30,000円〜' }]
    }
  },

  // ===== 追加：温泉地 =====
  kinosaki: {
    name: '城崎温泉', area: 'Kinosaki Onsen Japan',
    spots: [
      { name: '城崎温泉外湯めぐり（七湯）', themes: ['relax', 'culture'], desc: '浴衣で温泉街を巡る' },
      { name: '城崎温泉ロープウェイ・大師山', themes: ['photo', 'nature'], desc: '温泉街と日本海を一望' },
      { name: '玄武洞公園', themes: ['nature', 'photo'], desc: '六角形の柱状節理' },
      { name: '城崎マリンワールド', themes: ['adventure'], desc: '日本海側最大級の水族館' }
    ],
    food: [
      { name: '海中苑', themes: ['food'], desc: '冬は松葉ガニ、夏は但馬牛' }
    ],
    hotels: {
      low: [{ name: 'ホテル金波楼', area: '城崎温泉駅近く', price: '15,000円〜' }],
      mid: [{ name: '西村屋ホテル招月庭', area: '城崎温泉', price: '30,000円〜' }],
      high: [{ name: '西村屋本館', area: '城崎温泉', price: '50,000円〜' }]
    }
  },

  kurokawa: {
    name: '黒川温泉', area: 'Kurokawa Onsen Japan',
    spots: [
      { name: '入湯手形で湯めぐり', themes: ['relax', 'culture'], desc: '3つの露天風呂を選んで入浴' },
      { name: '丸鈴橋', themes: ['photo'], desc: '黒川温泉の風景の中心' },
      { name: 'いご坂', themes: ['photo'], desc: '石畳の風情ある坂道' },
      { name: '大観峰（車30分）', themes: ['nature', 'photo'], desc: '阿蘇の絶景パノラマ' }
    ],
    food: [
      { name: 'patisserie 麓 ふもと', themes: ['food'], desc: '温泉まんじゅうの新名物' }
    ],
    hotels: {
      low: [{ name: '里の湯 和らく', area: '黒川温泉', price: '15,000円〜' }],
      mid: [{ name: 'お宿 玄河', area: '黒川温泉', price: '25,000円〜' }],
      high: [
        { name: '山みず木', area: '黒川温泉', price: '40,000円〜' },
        { name: '御客屋', area: '黒川温泉', price: '35,000円〜' }
      ]
    }
  },

  arima: {
    name: '有馬温泉', area: 'Arima Onsen Japan',
    spots: [
      { name: '金の湯', themes: ['relax'], desc: '名物・含鉄塩化物泉' },
      { name: '銀の湯', themes: ['relax'], desc: '炭酸泉とラジウム泉' },
      { name: '太閤の湯殿館', themes: ['culture'], desc: '秀吉が築いた湯山御殿' },
      { name: '湯本坂', themes: ['photo', 'shopping'], desc: 'レトロな温泉街散歩' }
    ],
    food: [
      { name: 'ありまサイダー本舗', themes: ['food'], desc: '名物・ありまサイダー' }
    ],
    hotels: {
      low: [{ name: '有馬グランドホテル', area: '有馬温泉', price: '20,000円〜' }],
      mid: [{ name: '兵衛向陽閣', area: '有馬温泉', price: '30,000円〜' }],
      high: [
        { name: '中の坊瑞苑', area: '有馬温泉', price: '60,000円〜' },
        { name: '陶泉 御所坊', area: '有馬温泉', price: '50,000円〜' }
      ]
    }
  },

  noboribetsu: {
    name: '登別温泉', area: 'Noboribetsu Onsen Japan',
    spots: [
      { name: '地獄谷', themes: ['nature', 'photo'], desc: '硫黄香る火山活動の景観' },
      { name: '大湯沼', themes: ['nature'], desc: '巨大な天然湯沼' },
      { name: '登別マリンパークニクス', themes: ['adventure', 'culture'], desc: 'お城型の水族館' },
      { name: '登別伊達時代村', themes: ['culture', 'adventure'], desc: '江戸時代テーマパーク' }
    ],
    food: [
      { name: '味の大王 登別本店', themes: ['food'], desc: '名物・地獄ラーメン' }
    ],
    hotels: {
      low: [{ name: '湯元 オロフレ荘', area: '登別', price: '12,000円〜' }],
      mid: [{ name: '登別グランドホテル', area: '登別温泉', price: '20,000円〜' }],
      high: [{ name: '滝乃家', area: '登別温泉', price: '50,000円〜' }]
    }
  },

  // ===== 追加：海外アジア =====
  singapore: {
    name: 'シンガポール', area: 'Singapore',
    spots: [
      { name: 'マリーナベイ・サンズ展望台', themes: ['photo', 'shopping'], desc: '空中プールと夜景' },
      { name: 'ガーデンズ・バイ・ザ・ベイ', themes: ['photo', 'nature'], desc: 'スーパーツリーのライトショー' },
      { name: 'マーライオン公園', themes: ['photo', 'culture'], desc: '定番の写真スポット' },
      { name: 'セントーサ島', themes: ['adventure', 'relax'], desc: 'USSとビーチ' },
      { name: 'チャイナタウン・リトルインディア', themes: ['food', 'culture'], desc: '多民族都市の食文化' }
    ],
    food: [
      { name: 'Tian Tian Hainanese Chicken Rice', themes: ['food'], desc: 'マックスウェルの名店' },
      { name: 'Jumbo Seafood', themes: ['food'], desc: 'チリクラブの代表店' }
    ],
    hotels: {
      low: [{ name: 'The POD Capsule Hotel', area: 'カンポングラム', price: '6,000円〜' }],
      mid: [{ name: 'Hotel Boss', area: 'カンポングラム', price: '15,000円〜' }],
      high: [{ name: 'Marina Bay Sands', area: 'マリーナ', price: '60,000円〜' }]
    }
  },

  hongkong: {
    name: '香港', area: 'Hong Kong',
    spots: [
      { name: 'ヴィクトリア・ピーク', themes: ['photo', 'nature'], desc: '100万ドルの夜景' },
      { name: 'スター・フェリー', themes: ['photo', 'culture'], desc: '名物の海峡渡し船' },
      { name: '女人街・廟街ナイトマーケット', themes: ['shopping', 'food'], desc: '夜の屋台と買い物' },
      { name: '香港ディズニーランド', themes: ['adventure'], desc: 'コンパクトに楽しめるパーク' },
      { name: '大澳（タイオー）', themes: ['photo', 'nature'], desc: '水上家屋の漁村' }
    ],
    food: [
      { name: '添好運 ティム・ホー・ワン', themes: ['food'], desc: 'ミシュラン点心の名店' },
      { name: '蘭芳園', themes: ['food'], desc: '香港式ミルクティーの元祖' }
    ],
    hotels: {
      low: [{ name: 'Mini Hotel Causeway Bay', area: '銅鑼湾', price: '10,000円〜' }],
      mid: [{ name: 'Cordis Hong Kong', area: '旺角', price: '25,000円〜' }],
      high: [{ name: 'The Peninsula Hong Kong', area: '尖沙咀', price: '90,000円〜' }]
    }
  },

  hochiminh: {
    name: 'ホーチミン', area: 'Ho Chi Minh City Vietnam',
    spots: [
      { name: 'ベンタン市場', themes: ['shopping', 'food'], desc: '雑貨と屋台グルメ' },
      { name: 'サイゴン大教会', themes: ['culture', 'photo'], desc: 'パリのノートルダム風' },
      { name: '中央郵便局', themes: ['culture', 'photo'], desc: 'コロニアル建築の傑作' },
      { name: '統一会堂', themes: ['culture'], desc: 'ベトナム戦争の歴史' },
      { name: 'メコン川クルーズ', themes: ['adventure', 'nature'], desc: '日帰りツアーで田園体験' }
    ],
    food: [
      { name: 'Pho 2000', themes: ['food'], desc: '行列のフォー専門店' },
      { name: 'Bánh Mì Huỳnh Hoa', themes: ['food'], desc: 'バインミーの聖地' }
    ],
    hotels: {
      low: [{ name: 'A&Em Hotel', area: '1区', price: '5,000円〜' }],
      mid: [{ name: 'Liberty Central Saigon Citypoint', area: '1区', price: '15,000円〜' }],
      high: [{ name: 'Park Hyatt Saigon', area: '1区', price: '40,000円〜' }]
    }
  },

  // ===== 追加：海外ヨーロッパ =====
  london: {
    name: 'ロンドン', area: 'London UK',
    spots: [
      { name: 'バッキンガム宮殿', themes: ['culture', 'photo'], desc: '衛兵交代式が見もの' },
      { name: '大英博物館', themes: ['culture'], desc: '無料で世界の至宝を展示' },
      { name: 'タワーブリッジ・ロンドン塔', themes: ['photo', 'culture'], desc: 'テムズ川の象徴' },
      { name: 'ロンドン・アイ', themes: ['photo'], desc: '大観覧車から街を一望' },
      { name: 'カムデン・マーケット', themes: ['shopping', 'food'], desc: '個性派の露店街' },
      { name: 'ノッティング・ヒル・ポートベローマーケット', themes: ['photo', 'shopping'], desc: 'カラフルな街並みと骨董市' }
    ],
    food: [
      { name: 'Borough Market', themes: ['food', 'shopping'], desc: 'ロンドン最大級のフードマーケット' },
      { name: 'Sketch London', themes: ['food', 'photo'], desc: 'ピンクの内装で有名なカフェ' }
    ],
    hotels: {
      low: [{ name: 'YHA London Central', area: 'マリルボーン', price: 'ドミ5,000円〜' }],
      mid: [{ name: 'Premier Inn London County Hall', area: 'サウスバンク', price: '25,000円〜' }],
      high: [{ name: 'The Savoy', area: 'コヴェント・ガーデン', price: '120,000円〜' }]
    }
  },

  amsterdam: {
    name: 'アムステルダム', area: 'Amsterdam Netherlands',
    spots: [
      { name: 'ゴッホ美術館', themes: ['culture'], desc: '世界最大のゴッホコレクション' },
      { name: 'アンネ・フランクの家', themes: ['culture'], desc: '事前予約必須の歴史的場所' },
      { name: '運河クルーズ', themes: ['photo', 'relax'], desc: '世界遺産の運河を巡る' },
      { name: 'ダム広場・王宮', themes: ['culture', 'photo'], desc: '街の中心' },
      { name: 'キューケンホフ公園（春）', themes: ['nature', 'photo'], desc: '世界最大のチューリップ庭園' }
    ],
    food: [
      { name: 'Pancakes Amsterdam', themes: ['food'], desc: '名物オランダパンケーキ' }
    ],
    hotels: {
      low: [{ name: 'Generator Amsterdam', area: 'ウースト', price: 'ドミ4,500円〜' }],
      mid: [{ name: 'Hotel V Nesplein', area: '中心部', price: '30,000円〜' }],
      high: [{ name: 'Waldorf Astoria Amsterdam', area: '紳士運河', price: '90,000円〜' }]
    }
  },

  // ===== 追加：海外アメリカ =====
  losangeles: {
    name: 'ロサンゼルス', area: 'Los Angeles USA',
    spots: [
      { name: 'ハリウッドサイン・ハリウッド通り', themes: ['photo', 'culture'], desc: 'ウォーク・オブ・フェイム' },
      { name: 'グリフィス天文台', themes: ['photo', 'nature'], desc: 'ラ・ラ・ランドの夜景スポット' },
      { name: 'サンタモニカ・ピア', themes: ['photo', 'relax'], desc: 'ルート66終着の桟橋' },
      { name: 'ベニスビーチ', themes: ['photo', 'adventure'], desc: '個性派のビーチ街' },
      { name: 'ユニバーサル・スタジオ・ハリウッド', themes: ['adventure'], desc: '本場のテーマパーク' },
      { name: 'ゲッティ・センター', themes: ['culture', 'photo'], desc: '丘の上の無料美術館' }
    ],
    food: [
      { name: 'In-N-Out Burger Hollywood', themes: ['food'], desc: '西海岸の代表バーガー' },
      { name: 'Grand Central Market', themes: ['food'], desc: '多国籍フードホール' }
    ],
    hotels: {
      low: [{ name: 'Freehand Los Angeles', area: 'ダウンタウン', price: '15,000円〜' }],
      mid: [{ name: 'Loews Hollywood Hotel', area: 'ハリウッド', price: '35,000円〜' }],
      high: [{ name: 'The Beverly Hills Hotel', area: 'ビバリーヒルズ', price: '150,000円〜' }]
    }
  },

  lasvegas: {
    name: 'ラスベガス', area: 'Las Vegas USA',
    spots: [
      { name: 'ベラージオ噴水ショー', themes: ['photo'], desc: '無料で見られる名物ショー' },
      { name: 'ストリップ大通り', themes: ['photo', 'shopping'], desc: '夜のネオン散歩' },
      { name: 'フリーモントストリート', themes: ['photo', 'adventure'], desc: 'LEDアーケードと旧市街' },
      { name: 'グランドキャニオン日帰りツアー', themes: ['nature', 'adventure'], desc: '世界遺産の大峡谷' },
      { name: 'シルク・ドゥ・ソレイユ各種公演', themes: ['culture'], desc: '本場のショーを鑑賞' }
    ],
    food: [
      { name: 'Bacchanal Buffet (Caesars Palace)', themes: ['food'], desc: '高級ビュッフェの代名詞' }
    ],
    hotels: {
      low: [{ name: 'Excalibur Hotel & Casino', area: 'ストリップ南', price: '10,000円〜' }],
      mid: [{ name: 'The Venetian Resort', area: 'ストリップ中央', price: '25,000円〜' }],
      high: [{ name: 'Wynn Las Vegas', area: 'ストリップ北', price: '60,000円〜' }]
    }
  },

  sanfrancisco: {
    name: 'サンフランシスコ', area: 'San Francisco USA',
    spots: [
      { name: 'ゴールデンゲートブリッジ', themes: ['photo', 'culture'], desc: '世界一有名な吊り橋' },
      { name: 'アルカトラズ島', themes: ['culture', 'adventure'], desc: 'かつての監獄島ツアー' },
      { name: 'フィッシャーマンズワーフ', themes: ['food', 'photo'], desc: 'クラムチャウダーとアシカ' },
      { name: 'ロンバートストリート', themes: ['photo'], desc: '世界一曲がりくねった坂道' },
      { name: 'ケーブルカー乗車', themes: ['culture', 'photo'], desc: '坂の街の名物交通' }
    ],
    food: [
      { name: 'Boudin Bakery Fisherman\'s Wharf', themes: ['food'], desc: 'サワードウブレッドボウル' }
    ],
    hotels: {
      low: [{ name: 'HI San Francisco Downtown Hostel', area: 'ダウンタウン', price: 'ドミ5,500円〜' }],
      mid: [{ name: 'Hotel Zephyr', area: 'フィッシャーマンズワーフ', price: '35,000円〜' }],
      high: [{ name: 'Fairmont San Francisco', area: 'ノブヒル', price: '80,000円〜' }]
    }
  }
};

// 行き先タイプごとの都市リスト
const DEST_CITIES = {
  city: ['tokyo', 'kyoto', 'osaka', 'yokohama', 'fukuoka', 'nagoya', 'kobe', 'kanazawa', 'hiroshima', 'kamakura'],
  beach: ['okinawa_main', 'miyako', 'ishigaki'],
  mountain: ['hokkaido', 'kamikochi', 'yakushima', 'karuizawa', 'shirakawago'],
  hotspring: ['hakone', 'kusatsu', 'yufuin', 'beppu', 'kinosaki', 'kurokawa', 'arima', 'noboribetsu'],
  overseas_asia: ['seoul', 'taipei', 'bangkok', 'singapore', 'hongkong', 'hochiminh'],
  overseas_europe: ['paris', 'rome', 'barcelona', 'london', 'amsterdam'],
  overseas_america: ['newyork', 'hawaii', 'losangeles', 'lasvegas', 'sanfrancisco']
};

// 国内/海外フラグ（検索リンク出し分け用）
const OVERSEAS_DESTS = new Set(['overseas_asia', 'overseas_europe', 'overseas_america']);

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
