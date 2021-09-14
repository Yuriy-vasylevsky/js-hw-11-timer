import './sass/main.scss';

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
  body: document.querySelector('body'),

  clockfaceDays: document.querySelector('span[data-value="days"]'),
  clockfaceHours: document.querySelector('span[data-value="hours"]'),
  clockfaceMins: document.querySelector('span[data-value="mins"]'),
  clockfaceSecs: document.querySelector('span[data-value="secs"]'),
};

refs.clockfaceDay
console.log(refs.clockfaceDay)

class Timer {
  constructor ({onTick, targetDate}) {
    this.intervalid = null;
    this.isActive = false;
    this.onTick = onTick;
    this.targetDate = targetDate;
    this.init();
    console.log(this.targetDate)
  }
    

  init() {
    const time = this.getTimeComponents(0)
    this.onTick(time)
  }

  start() {

    if (this.isActive) {
      return
    }

    // const startTime = Date.now();
    const startTime = this.targetDate;
    this.isActive = true
    this.intervalid = setInterval(() =>{
      this.isActive = true
      const currentTime = Date.now();
      const deltatime = startTime - currentTime;
      const time = this.getTimeComponents(deltatime)
      console.log(time)
      this.onTick(time)
      // updateClockface(time)
      // console.log(`${days} : ${hours} : ${mins} : ${sec}`)
      refs.body.classList.add('img')
    },1000); 
  }

  stop() {
    clearInterval(this.intervalid)
    this.isActive = false
    const time = this.getTimeComponents(0)
    this.onTick(time)
  }

  pad(value) {
    return String(value).padStart(2, '0')
  }

  getTimeComponents (time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 *60 * 24)) / (1000 * 60 *60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const sec = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return {days, hours, mins, sec};
  }
}


// const timer = new Timer({
//   onTick: updateClockface,
// })

const timer2 = new Timer({
    selector: '#timer-1',
    targetDate: new Date('Sept 17, 2021, 20:00'),
    onTick: updateClockface,
});

refs.startBtn.addEventListener('click', timer2.start.bind(timer2));
refs.stopBtn.addEventListener('click', timer2.stop.bind(timer2));

function updateClockface({days, hours, mins, sec}) {
  // refs.clockface.textContent = `${days} :  :  : `; 
  refs.clockfaceDays.textContent = `${days}`;
  refs.clockfaceHours.textContent = `${hours}`;
  refs.clockfaceMins.textContent = `${mins}`;
  refs.clockfaceSecs.textContent = `${sec}`;

}































