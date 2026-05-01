// ===== ヘルパー =====
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function pickN(arr, n) {
  const copy = [...arr];
  const out = [];
  while (out.length < n && copy.length) {
    out.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
  }
  return out;
}
function mapsLink(name, area) {
  const q = encodeURIComponent(`${name} ${area}`);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}
function bookingLink(name, area) {
  const q = encodeURIComponent(`${name} ${area}`);
  return `https://www.booking.com/searchresults.html?ss=${q}`;
}
function rakutenLink(area) {
  return `https://travel.rakuten.co.jp/dsearch/?f_keyword=${encodeURIComponent(area)}`;
}

// ===== 都市セレクトの動的更新 =====
function updateCityOptions() {
  const dest = document.getElementById('destination').value;
  const citySelect = document.getElementById('city');
  const cities = DEST_CITIES[dest] || [];
  citySelect.innerHTML = cities.map(key => {
    const c = CITY_DATA[key];
    return `<option value="${key}">${c.name}</option>`;
  }).join('');
}

document.getElementById('destination').addEventListener('change', updateCityOptions);
updateCityOptions();

// ===== 時間スロット =====
const TIME_SLOTS = {
  morning: '09:00',
  noon: '12:00',
  afternoon: '14:00',
  evening: '18:00',
  night: '20:00'
};

function slotsForDay(d, totalDays) {
  if (totalDays === 1) return ['morning', 'noon', 'afternoon', 'evening'];
  if (d === 1) return ['afternoon', 'evening', 'night'];
  if (d === totalDays) return ['morning', 'noon', 'afternoon'];
  return ['morning', 'noon', 'afternoon', 'evening', 'night'];
}

// ===== プラン生成 =====
function generatePlan(input) {
  const cityKey = input.city;
  const city = CITY_DATA[cityKey];
  const themes = input.themes;
  const days = parseInt(input.days, 10);

  // テーマ絞り込み（指定があれば優先、なければ全部）
  const filterByTheme = (arr) => {
    if (!themes.length) return arr;
    const matched = arr.filter(s => s.themes.some(t => themes.includes(t)));
    return matched.length ? matched : arr;
  };

  const attractions = filterByTheme(city.spots);
  const foodSpots = filterByTheme(city.food || []);

  const dayPlans = [];
  const used = new Set();

  for (let d = 1; d <= days; d++) {
    const slots = slotsForDay(d, days);
    const items = [];

    for (const slot of slots) {
      const isFood = (slot === 'noon' || slot === 'evening' || slot === 'night');
      let pool;
      if (isFood && foodSpots.length) {
        pool = foodSpots.filter(s => !used.has(s.name));
        if (!pool.length) pool = foodSpots;
      } else {
        pool = attractions.filter(s => !used.has(s.name));
        if (!pool.length) pool = attractions;
      }
      const choice = pick(pool);
      used.add(choice.name);
      const icon = isFood ? '🍽' : (slot === 'evening' || slot === 'night' ? '🌙' : '📍');
      items.push({
        time: TIME_SLOTS[slot],
        icon,
        name: choice.name,
        desc: choice.desc,
        mapUrl: mapsLink(choice.name, city.area)
      });
    }

    let title;
    if (days === 1) title = `Day 1 - ${city.name}日帰り`;
    else if (d === 1) title = `Day 1 - ${city.name}到着・チェックイン`;
    else if (d === days) title = `Day ${d} - チェックアウト・帰路`;
    else title = `Day ${d} - ${city.name}満喫`;

    dayPlans.push({ title, items });
  }

  return {
    cityKey, city, days,
    season: input.season,
    party: input.party,
    budget: input.budget,
    budgetInfo: BUDGETS[input.budget],
    themes,
    dayPlans,
    seasonTips: SEASON_TIPS[input.season],
    partyTip: PARTY_TIPS[input.party],
    hotels: city.hotels[input.budget] || []
  };
}

// ===== 描画 =====
function renderPlan(plan) {
  const themeLabels = {
    food: 'グルメ', culture: '文化', nature: '自然', shopping: 'ショッピング',
    relax: 'のんびり', adventure: 'アクティビティ', photo: '写真映え'
  };
  const partyLabels = { solo: '一人旅', couple: 'カップル', family: '家族', friends: '友人グループ' };
  const budgetLabels = { low: '節約', mid: '標準', high: '贅沢' };
  const seasonLabels = { spring: '春', summer: '夏', autumn: '秋', winter: '冬' };

  const tags = [
    `<span class="tag">📍 ${plan.city.name}</span>`,
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
          <div class="act-text">
            <div class="act-name">${it.icon} ${it.name}
              <a class="map-btn" href="${it.mapUrl}" target="_blank" rel="noopener">🗺 地図</a>
            </div>
            ${it.desc ? `<div class="act-desc">${it.desc}</div>` : ''}
          </div>
        </div>`).join('')}
    </div>
  `).join('');

  // ホテル
  const hotelHtml = plan.hotels.length ? plan.hotels.map(h => `
    <div class="hotel-item">
      <div class="hotel-name">🏨 ${h.name}</div>
      <div class="hotel-meta">
        <span class="hotel-area">${h.area}</span>
        <span class="hotel-price">${h.price}</span>
      </div>
      <div class="hotel-links">
        <a href="${bookingLink(h.name, plan.city.area)}" target="_blank" rel="noopener">Booking.comで検索</a>
        <a href="${rakutenLink(h.name)}" target="_blank" rel="noopener">楽天トラベルで検索</a>
        <a href="${mapsLink(h.name, plan.city.area)}" target="_blank" rel="noopener">🗺 地図</a>
      </div>
    </div>
  `).join('') : '<p>該当する宿泊先データがありません。</p>';

  return `
    <div class="plan-header">
      <div class="plan-title">🌍 ${plan.city.name} ${plan.days === 1 ? '日帰り' : (plan.days - 1) + '泊' + plan.days + '日'}の旅</div>
      <div class="plan-meta">${tags}</div>
    </div>

    <h2>📅 行程</h2>
    ${dayHtml}

    <h2>🏨 おすすめ宿泊先（${budgetLabels[plan.budget]}向け）</h2>
    <div class="hotels-list">${hotelHtml}</div>
    <div class="hotel-search-all">
      <a class="search-btn" href="${bookingLink(plan.city.name, plan.city.area)}" target="_blank" rel="noopener">
        🔍 Booking.comで「${plan.city.name}」のホテル一覧を見る
      </a>
      <a class="search-btn" href="${rakutenLink(plan.city.name)}" target="_blank" rel="noopener">
        🔍 楽天トラベルで「${plan.city.name}」を検索
      </a>
    </div>

    <div class="summary-box">
      <h3>💰 予算プラン（${budgetLabels[plan.budget]}）</h3>
      <ul>
        <li><b>宿泊:</b> ${plan.budgetInfo.hotel}</li>
        <li><b>食事:</b> ${plan.budgetInfo.meal}</li>
        <li><b>移動:</b> ${plan.budgetInfo.transport}</li>
        <li><b>コツ:</b> ${plan.budgetInfo.tip}</li>
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
  lines.push(`【${plan.city.name} ${plan.days === 1 ? '日帰り' : (plan.days - 1) + '泊' + plan.days + '日'}の旅プラン】`);
  lines.push('');
  plan.dayPlans.forEach(d => {
    lines.push(`■ ${d.title}`);
    d.items.forEach(it => lines.push(`  ${it.time}  ${it.name}${it.desc ? '（' + it.desc + '）' : ''}`));
    lines.push('');
  });
  lines.push('■ おすすめ宿泊先');
  plan.hotels.forEach(h => lines.push(`  ・${h.name}（${h.area} / ${h.price}）`));
  return lines.join('\n');
}

// ===== UI =====
let lastInput = null;

function getInput() {
  return {
    destination: document.getElementById('destination').value,
    city: document.getElementById('city').value,
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
