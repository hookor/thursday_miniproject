/* let titles = Array.from(document.querySelectorAll('body #contentWrap .block_hot .con_align #menu_ul li .menu_tt span'))
let outputs = [];
for(const a of titles){
    outputs.push(a.innerText);
} */

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const titles = [
  '(L) ICED 넛츠 크림 라떼',
  '아포가토 오리지널',
  'ICED 콜드브루 아메리카노',
  '(EX) ICED 콜드브루 아메리카노',
  'ICED 디카페인 콜드브루 아메리카노',
  '(EX) ICED 디카페인 콜드브루 아메리카노',
  'ICED 디카페인 콜드브루 라떼',
  '(EX) ICED 디카페인 콜드브루 라떼',
  'ICED 콜드브루 라떼',
  '(EX) ICED 콜드브루 라떼',
  'ICED 콜드브루 니트로',
  'ICED 디카페인 콜드브루 니트로',
  'ICED 콜드브루 화이트 비엔나',
  'ICED 디카페인 콜드브루 화이트 비엔나',
  'ICED 디카페인 흑당 콜드브루',
  '(EX) ICED 디카페인 흑당 콜드브루',
  'ICED 디카페인 연유 콜드브루',
  '(EX) ICED 디카페인 연유 콜드브루',
  'ICED 디카페인 버블 흑당 콜드브루',
  '(EX) ICED 디카페인 버블 흑당 콜드브루',
  'ICED 흑당 콜드브루',
  '(EX) ICED 흑당 콜드브루',
  '(L) HOT 연유 카페 라떼',
  '(L) ICED 연유 카페 라떼',
  'ICED 연유 콜드브루',
  '(EX) ICED 연유 콜드브루',
  'HOT 에스프레소',
  'HOT 에스프레소 마끼아또',
  'HOT 에스프레소 콘파냐',
  '(L) HOT 카페 아메리카노',
  '(L) ICED 카페 아메리카노',
  '(EX) HOT 카페 아메리카노',
  '(EX) ICED 카페 아메리카노',
  '(L) HOT 카페 라떼',
  '(L) ICED 카페 라떼',
  '(EX) HOT 카페 라떼',
  '(EX) ICED 카페 라떼',
  '(L) HOT 카푸치노',
  '(L) ICED 카푸치노',
  '(L) HOT 카페 모카',
  '(L) ICED 카페 모카',
  '(EX) HOT 카페 모카',
  '(EX) ICED 카페 모카',
  '(L) HOT 카라멜 마끼아또',
  '(L) ICED 카라멜 마끼아또',
  '(EX) HOT 카라멜 마끼아또',
  '(EX) ICED 카라멜 마끼아또',
  '(L) HOT 바닐라 라떼',
  '(L) ICED 바닐라 라떼',
  '(EX) HOT 바닐라 라떼',
  '(EX) ICED 바닐라 라떼',
  '(L) HOT 화이트 초콜릿 모카',
  '(L) ICED 화이트 초콜릿 모카',
  '(EX) HOT 화이트 초콜릿 모카',
  '(L) HOT 민트 모카',
  '(EX) ICED 화이트 초콜릿 모카',
  '(L) ICED 민트 모카',
]
const caffeine = [
  '(232mg)',
  '(116mg)',
  '(104mg)',
  '(155mg)',
  '(4mg)',
  '(5mg)',
  '(4mg)',
  '(5mg)',
  '(104mg)',
  '(155mg)',
  '(124mg)',
  '(4mg)',
  '(52mg)',
  '(2mg)',
  '(2mg)',
  '(4mg)',
  '(4mg)',
  '(5mg)',
  '(6mg)',
  '(9mg)',
  '(52mg)',
  '(104mg)',
  '(232mg)',
  '(232mg)',
  '(104mg)',
  '(155mg)',
  '(116mg)',
  '(116mg)',
  '(116mg)',
  '(232mg)',
  '(232mg)',
  '(348mg)',
  '(348mg)',
  '(232mg)',
  '(232mg)',
  '(348mg)',
  '(348mg)',
  '(232mg)',
  '(232mg)',
  '(245mg)',
  '(245mg)',
  '(365mg)',
  '(365mg)',
  '(232mg)',
  '(232mg)',
  '(348mg)',
  '(348mg)',
  '(274mg)',
  '(274mg)',
  '(432mg)',
  '(432mg)',
  '(232mg)',
  '(232mg)',
  '(348mg)',
  '(268mg)',
  '(348mg)',
  '(268mg)',
]

const cafdata = titles.reduce((acc, curr, idx) => {
  acc[curr] = caffeine[idx]
  return acc
}, new Object())

$('.searchbar').addEventListener('keyup', function (e) {
  if (e.code === 'Enter') {
    const beverage = e.target.value
    const keys = Object.keys(cafdata)
    const values = Object.values(cafdata)

    let caffeinebox = []
    let emojibox = []
    for (a of values) {
      let convertedNum = Number(a.replace(/[^0-9]/g, ''))
      caffeinebox.push(Number(a.replace(/[^0-9]/g, '')))
      if (convertedNum > 400) {
        emojibox.push('☠')
      } else if (400 >= convertedNum && convertedNum > 300) {
        emojibox.push('❤‍🔥')
      } else if (300 >= convertedNum && convertedNum > 200) {
        emojibox.push('🧠')
      } else if (200 >= convertedNum && convertedNum > 100) {
        emojibox.push('☕')
      } else {
        emojibox.push('🤨')
      }
    }
    console.log(caffeinebox)
    console.log(typeof caffeinebox[0])
    console.log(emojibox)

    keys.filter((key, index) => {
      if (key.indexOf(beverage) !== -1) {
        $('.display-section').style.display = 'flex'
        const item = document.createElement('div')
        item.classList.add('display')
        item.innerHTML = `${keys[index]}: ${values[index]} ${emojibox[index]}`
        $('.display-section').appendChild(item)
      }
    })
  }
})
