import { Podcast } from './Podcast/index.js'

const podcast = [
  {
    num: 127, 
    title: 'Hledání plyšového Yettiho', 
    guest: 'Vojtěch Ryba',
  },
  {
    num: 128, 
    title: 'Moderní hrachová polévka', 
    guest: 'Kamila Štancová',
  },
  {
    num: 129, 
    title: 'Poloautomatické zrcadlo', 
    guest: 'Janka Janovská',
  },
  {
    num: 130, 
    title: 'Máčené hlavy parlamentu', 
    guest: 'Jonáš Daněk',
  },
  {
    num: 131, 
    title: 'Služby na hraně přívěsu', 
    guest: 'Tereza Křivánková',
  },
  {
    num: 132, 
    title: 'Klasifikace sněžných klokanů', 
    guest: 'Josef Stix',
  },
  {
    num: 133, 
    title: 'Rybolov v Oceánu bouří', 
    guest: 'Ludmila Gajová',
  },
];

const listPodcast = document.querySelector('.episodes-list');
for (let i = 0; i < podcast.length; i += 1) {
  listPodcast.innerHTML += Podcast(podcast[i]);
}

{/* <div class="episode">
      <div class="episode__num">127</div>
      <div class="episode__body">
        <div class="episode__title">Hledání plyšového Yettiho</div>
        <div class="episode__guest">host: Vojtěch Ryba</div>
      </div>
    </div>
 */}