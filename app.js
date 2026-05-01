const DESTINATIONS = {
  city: {
    label: '都市観光',
    cities: ['東京', '大阪', '京都', '横浜', '福岡', '名古屋'],
    spots: {
      culture: ['浅草寺・雷門めぐり', '清水寺と二年坂散策', '大阪城公園', '博多旧市街ウォーク', '元町中華街散歩'],
      food: ['老舗うなぎ店でランチ', '路地裏の隠れ家ラーメン', '寿司カウンターで握り体験', '屋台で食べ歩き', '老舗喫茶店モーニング'],
      shopping: ['百貨店デパ地下めぐり', '原宿・表参道ショッピング', '心斎橋アーケード散策', 'アウトレットモール', '骨董市・蚤の市'],
      photo: ['夜景スポットで撮影', '映えカフェでブランチ', 'レトロ商店街フォトウォーク', '高層展望台へ'],
      relax: ['ホテルラウンジでアフタヌーンティー', '川沿い散歩', '都市公園でピクニック'],
      adventure: ['シティサイクリング', 'ナイトクラブ・ジャズバー巡り'],
      nature: ['都市の植物園', '皇居外苑ジョギング']
    }
  },
  beach: {
    label: 'ビーチリゾート',
    cities: ['沖縄本島', '宮古島', '石垣島', '小笠原', '奄美大島'],
    spots: {
      relax: ['ビーチでのんびり読書', 'リゾートプールサイドでカクテル', 'ハンモックで昼寝', 'スパでマッサージ'],
      adventure: ['シュノーケリング体験', 'シーカヤック', 'パラセーリング', 'SUPで朝の海散歩', 'ダイビング体験'],
      photo: ['ウユニ風ビーチで撮影', '夕日スポットでサンセット鑑賞', '青の洞窟ツアー'],
      food: ['海鮮BBQディナー', 'トロピカルフルーツ朝食', '島料理の居酒屋', 'ビーチサイドカフェ'],
      nature: ['マングローブカヤック', '星空観賞ツアー', '離島巡りクルーズ'],
      culture: ['首里城跡・琉球文化体験', '伝統工芸ワークショップ'],
      shopping: ['国際通りでお土産', '島の市場めぐり']
    }
  },
  mountain: {
    label: '山・自然',
    cities: ['北海道', '長野・上高地', '屋久島', '日光', '白川郷'],
    spots: {
      nature: ['登山・ハイキング', '高原散策', '滝めぐり', '原生林ガイドツアー', '湖畔サイクリング'],
      adventure: ['ラフティング', 'パラグライダー', 'マウンテンバイク', 'キャニオニング', 'スキー・スノーボード'],
      relax: ['山の宿で温泉', 'コテージでBBQ', '自然の中でヨガ', '森林浴セラピー'],
      photo: ['雲海スポット早朝撮影', '紅葉名所めぐり', '星空観測'],
      food: ['ジビエ料理ディナー', '地元食材の山菜料理', '高原ソフトクリーム'],
      culture: ['古民家集落散策', '地域の祭り見学'],
      shopping: ['道の駅で地場産品', '工房めぐり']
    }
  },
  hotspring: {
    label: '温泉地',
    cities: ['箱根', '草津', '別府', '由布院', '城崎', '黒川'],
    spots: {
      relax: ['露天風呂で長湯', '貸切風呂でゆったり', '湯めぐり手形で外湯巡り', '足湯カフェ', '和室で読書タイム'],
      food: ['会席料理の夕食', '温泉まんじゅう食べ比べ', '地酒利き酒', '温泉卵の朝食'],
      culture: ['浴衣で街歩き', '射的・温泉街レトロ散歩', '美術館・記念館巡り'],
      photo: ['湯けむり風景撮影', '紅葉と温泉の絶景'],
      nature: ['温泉地裏の遊歩道', '近隣の渓谷散策'],
      shopping: ['温泉街の土産物屋', '工芸品ショップ'],
      adventure: ['周辺の登山道トレッキング']
    }
  },
  overseas_asia: {
    label: '海外アジア',
    cities: ['ソウル', '台北', 'バンコク', 'ホーチミン', 'シンガポール'],
    spots: {
      food: ['屋台街で食べ歩き', 'ローカル人気食堂で朝食', 'ルーフトップバー', '本場のフルコースディナー', 'ナイトマーケット夕食'],
      shopping: ['免税店ショッピング', '巨大ショッピングモール', 'ローカル雑貨市場', '問屋街ハント'],
      culture: ['寺院・宮殿巡り', '世界遺産観光', '伝統舞踊鑑賞', '現地ガイドの旧市街ツアー'],
      relax: ['本場マッサージ・スパ', 'ホテルプールで日光浴'],
      photo: ['夜景クルーズ', '映えカフェ巡り'],
      adventure: ['日帰り郊外ツアー', 'クッキングクラス参加'],
      nature: ['市内の大規模公園', '近郊の自然保護区']
    }
  },
  overseas_europe: {
    label: '海外ヨーロッパ',
    cities: ['パリ', 'ローマ', 'バルセロナ', 'ロンドン', 'ウィーン'],
    spots: {
      culture: ['ルーブル・ウフィツィなど大美術館', '世界遺産の大聖堂見学', 'オペラ・クラシックコンサート', '歴史地区ガイドツアー', '城・宮殿巡り'],
      food: ['星付きレストランディナー', 'ワイナリー・ビアホール', 'マルシェで朝食調達', '老舗カフェでブレイク'],
      shopping: ['ブランド本店巡り', 'アンティーク市', '地元デザイナーのブティック'],
      photo: ['朝の無人スポット撮影', '夕暮れの街並み散歩'],
      relax: ['公園のベンチで読書', 'リバークルーズ'],
      adventure: ['レンタサイクルで街巡り', '近郊への日帰り列車旅'],
      nature: ['郊外の庭園・お城', '海岸沿いドライブ']
    }
  },
  overseas_america: {
    label: '海外アメリカ',
    cities: ['ニューヨーク', 'ロサンゼルス', 'ハワイ・オアフ島', 'サンフランシスコ', 'ラスベガス'],
    spots: {
      shopping: ['アウトレット爆買い', '5番街・ロデオドライブ', 'スーパーでばらまき土産'],
      food: ['本場ステーキハウス', 'ブランチ文化を堪能', 'フードトラック巡り', 'クラフトビール醸造所'],
      culture: ['MoMA・メトロポリタン美術館', 'ブロードウェイ鑑賞', '映画スタジオツアー'],
      adventure: ['ヘリコプター遊覧', 'テーマパーク1日券', 'サーフィンレッスン'],
      photo: ['自由の女神クルーズ', 'グリフィス天文台で夜景'],
      relax: ['ワイキキビーチでまったり', 'セントラルパークでピクニック'],
      nature: ['国立公園日帰りツアー', 'ハイキングトレイル']
    }
  }
};

const BUDGETS = {
  low: { hotel: 'ゲストハウス・カプセルホテル', meal: '街中の定食・チェーン店', transport: '公共交通中心', tip: '駅近の格安宿、ランチ重視で外食コスト圧縮' },
  mid: { hotel: '中堅ビジネスホテル・シティホテル', meal: '名物レストラン中心', transport: '電車＋必要時タクシー', tip: '事前予約で割引活用、メリハリある食事配分' },
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

const TIME_SLOTS = {
  morning: { time: '09:00', label: '午前' },
  noon: { time: '12:00', label: '昼食' },
  afternoon: { time: '14:00', label: '午後' },
  evening: { time: '18:00', label: '夕方' },
  night: { time: '20:00', label: '夜' }
};

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function pickN(arr, n) {
  const copy = [...arr];
  const out = [];
  while (out.length < n && copy.length) {
    out.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
  }
  return out;
}

function generatePlan(input) {
  const dest = DESTINATIONS[input.destination];
  const city = pick(dest.cities);
  const themes = input.themes.length ? input.themes : Object.keys(dest.spots);
  const days = parseInt(input.days, 10);
  const budgetInfo = BUDGETS[input.budget];

  const allActivities = [];
  themes.forEach(t => {
    if (dest.spots[t]) allActivities.push(...dest.spots[t].map(s => ({ act: s, theme: t })));
  });
  // Fallback: if themes don't match dest, fill from any available
  if (allActivities.length === 0) {
    Object.values(dest.spots).forEach(arr => allActivities.push(...arr.map(s => ({ act: s }))));
  }

  const dayPlans = [];
  for (let d = 1; d <= days; d++) {
    const slots = days === 1
      ? ['morning', 'noon', 'afternoon', 'evening']
      : d === 1
        ? ['afternoon', 'evening', 'night']
        : d === days
          ? ['morning', 'noon', 'afternoon']
          : ['morning', 'noon', 'afternoon', 'evening', 'night'];

    const picked = pickN(allActivities, slots.length);
    while (picked.length < slots.length) picked.push(pick(allActivities));

    const items = slots.map((s, i) => {
      const a = picked[i];
      let text = a.act;
      if (s === 'noon') text = `🍽 ${text}`;
      else if (s === 'evening' || s === 'night') text = `🌙 ${text}`;
      else text = `📍 ${text}`;
      return { time: TIME_SLOTS[s].time, text };
    });

    let title;
    if (days === 1) title = `Day 1 - ${city}日帰り`;
    else if (d === 1) title = `Day 1 - ${city}到着・チェックイン`;
    else if (d === days) title = `Day ${d} - チェックアウト・帰路`;
    else title = `Day ${d} - ${city}満喫`;

    dayPlans.push({ title, items });
  }

  return {
    city,
    destLabel: dest.label,
    days,
    season: input.season,
    party: input.party,
    budget: input.budget,
    budgetInfo,
    themes,
    dayPlans,
    seasonTips: SEASON_TIPS[input.season],
    partyTip: PARTY_TIPS[input.party]
  };
}

function renderPlan(plan) {
  const themeLabels = {
    food: 'グルメ', culture: '文化', nature: '自然', shopping: 'ショッピング',
    relax: 'のんびり', adventure: 'アクティビティ', photo: '写真映え'
  };
  const partyLabels = { solo: '一人旅', couple: 'カップル', family: '家族', friends: '友人グループ' };
  const budgetLabels = { low: '節約', mid: '標準', high: '贅沢' };
  const seasonLabels = { spring: '春', summer: '夏', autumn: '秋', winter: '冬' };

  const tags = [
    `<span class="tag">📍 ${plan.destLabel}</span>`,
    `<span class="tag">🗓 ${plan.days === 1 ? '日帰り' : (plan.days - 1) + '泊' + plan.days + '日'}</span>`,
    `<span class="tag">🍂 ${seasonLabels[plan.season]}</span>`,
    `<span class="tag">👥 ${partyLabels[plan.party]}</span>`,
    `<span class="tag">💰 ${budgetLabels[plan.budget]}</span>`,
    ...plan.themes.map(t => `<span class="tag">#${themeLabels[t] || t}</span>`)
  ].join('');

  const dayHtml = plan.dayPlans.map(d => `
    <div class="day-block">
      <div class="day-title">${d.title}</div>
      ${d.items.map(it => `
        <div class="activity">
          <span class="time">${it.time}</span>
          <span class="act-text">${it.text}</span>
        </div>`).join('')}
    </div>
  `).join('');

  return `
    <div class="plan-header">
      <div class="plan-title">🌍 ${plan.city} ${plan.days === 1 ? '日帰り' : (plan.days - 1) + '泊' + plan.days + '日'}の旅</div>
      <div class="plan-meta">${tags}</div>
    </div>

    <h2>📅 行程</h2>
    ${dayHtml}

    <div class="summary-box">
      <h3>🏨 宿泊・予算プラン</h3>
      <ul>
        <li><b>宿泊:</b> ${plan.budgetInfo.hotel}</li>
        <li><b>食事:</b> ${plan.budgetInfo.meal}</li>
        <li><b>移動:</b> ${plan.budgetInfo.transport}</li>
        <li><b>節約のコツ:</b> ${plan.budgetInfo.tip}</li>
      </ul>
    </div>

    <div class="summary-box">
      <h3>☀️ 季節のヒント</h3>
      <ul>${plan.seasonTips.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>

    <div class="summary-box">
      <h3>👥 同行者向けアドバイス</h3>
      <ul><li>${plan.partyTip}</li></ul>
    </div>

    <div class="actions">
      <button class="btn-secondary" id="regen">🎲 別案を生成</button>
      <button class="btn-secondary" id="copy">📋 プランをコピー</button>
    </div>
  `;
}

function planToText(plan) {
  const lines = [];
  lines.push(`【${plan.city} ${plan.days === 1 ? '日帰り' : (plan.days - 1) + '泊' + plan.days + '日'}の旅プラン】`);
  lines.push('');
  plan.dayPlans.forEach(d => {
    lines.push(`■ ${d.title}`);
    d.items.forEach(it => lines.push(`  ${it.time}  ${it.text.replace(/^[^\s]+\s/, '')}`));
    lines.push('');
  });
  lines.push(`宿泊: ${plan.budgetInfo.hotel}`);
  lines.push(`食事: ${plan.budgetInfo.meal}`);
  lines.push(`移動: ${plan.budgetInfo.transport}`);
  return lines.join('\n');
}

let lastInput = null;

function getInput() {
  return {
    destination: document.getElementById('destination').value,
    days: document.getElementById('days').value,
    budget: document.getElementById('budget').value,
    season: document.getElementById('season').value,
    party: document.getElementById('party').value,
    themes: [...document.querySelectorAll('.chips input:checked')].map(el => el.value)
  };
}

function showPlan(input) {
  lastInput = input;
  const plan = generatePlan(input);
  const result = document.getElementById('result');
  result.innerHTML = renderPlan(plan);
  result.classList.remove('hidden');
  result.scrollIntoView({ behavior: 'smooth', block: 'start' });

  document.getElementById('regen').addEventListener('click', () => showPlan(lastInput));
  document.getElementById('copy').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(planToText(plan));
      const btn = document.getElementById('copy');
      const orig = btn.textContent;
      btn.textContent = '✅ コピーしました';
      setTimeout(() => { btn.textContent = orig; }, 1500);
    } catch (e) {
      alert('コピーに失敗しました');
    }
  });
}

document.getElementById('plan-form').addEventListener('submit', e => {
  e.preventDefault();
  showPlan(getInput());
});
