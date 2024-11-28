interface CategoryRule {
  category: string;
  patterns: RegExp[];
}

const categoryRules: CategoryRule[] = [
  {
    category: 'Social Media',
    patterns: [
      /facebook\.com/,
      /twitter\.com/,
      /instagram\.com/,
      /linkedin\.com/,
      /reddit\.com/,
      /tiktok\.com/,
      /snapchat\.com/,
      /pinterest\.com/,
      /tumblr\.com/,
      /weibo\.com/,
      /vk\.com/,
      /discord\.com/,
      /quora\.com/,
      /mastodon\.social/,
      /clubhouse\.com/,
      /flickr\.com/,
      /telegram\.org/,
      /line\.me/,
      /wechat\.com/,
      /nextdoor\.com/,
      /whatsapp\.com/,
      /messenger\.com/,
      /medium\.com/,
      /viber\.com/,
      /signal\.org/,
      /dribbble\.com/,
      /behance\.net/,
      /meetup\.com/,
      /deviantart\.com/,
      /mix\.com/,
      /x\.com/,
    ],
  },
  {
    category: 'Productivity',
    patterns: [
      /github\.com/,
      /gitlab\.com/,
      /notion\.so/,
      /trello\.com/,
      /slack\.com/,
      /google\.com\/docs/,
      /google\.com\/sheets/,
      /asana\.com/,
      /monday\.com/,
      /clickup\.com/,
      /evernote\.com/,
      /dropbox\.com/,
      /box\.com/,
      /todoist\.com/,
      /workflowy\.com/,
      /coggle\.it/,
      /mindmeister\.com/,
      /mural\.co/,
      /figma\.com/,
      /miro\.com/,
      /weebly\.com/,
      /typeform\.com/,
      /zoho\.com/,
      /basecamp\.com/,
      /hubspot\.com/,
      /salesforce\.com/,
      /zapier\.com/,
      /microsoft\.com\/excel/,
      /microsoft\.com\/word/,
      /calendly\.com/,
      /lucidchart\.com/,
    ],
  },
  {
    category: 'Entertainment',
    patterns: [
      /youtube\.com/,
      /netflix\.com/,
      /spotify\.com/,
      /twitch\.tv/,
      /disney\+/,
      /crunchyroll\.com/,
      /funimation\.com/,
      /hulu\.com/,
      /vimeo\.com/,
      /primevideo\.com/,
      /hbomax\.com/,
      /apple\.com\/tv/,
      /soundcloud\.com/,
      /pandora\.com/,
      /deezer\.com/,
      /audible\.com/,
      /imdb\.com/,
      /rottentomatoes\.com/,
      /letterboxd\.com/,
      /liveleak\.com/,
      /veoh\.com/,
      /dailymotion\.com/,
      /shudder\.com/,
      /peacocktv\.com/,
      /paramountplus\.com/,
      /amctheatres\.com/,
      /gaia\.com/,
      /iheartradio\.com/,
      /mixcloud\.com/,
      /stageit\.com/,
      /bandcamp\.com/,
    ],
  },
  {
    category: 'Shopping',
    patterns: [
      /amazon\.com/,
      /ebay\.com/,
      /etsy\.com/,
      /walmart\.com/,
      /shopify\.com/,
      /alibaba\.com/,
      /flipkart\.com/,
      /target\.com/,
      /bestbuy\.com/,
      /costco\.com/,
      /newegg\.com/,
      /wayfair\.com/,
      /homegoods\.com/,
      /chewy\.com/,
      /overstock\.com/,
      /wish\.com/,
      /shein\.com/,
      /zalando\.com/,
      /macys\.com/,
      /ikea\.com/,
      /kohls\.com/,
      /gap\.com/,
      /nike\.com/,
      /adidas\.com/,
      /patagonia\.com/,
      /uniqlo\.com/,
      /nordstrom\.com/,
      /jcpenney\.com/,
      /marksandspencer\.com/,
      /boohoo\.com/,
      /lululemon\.com/,
    ],
  },
  {
    category: 'News & Media',
    patterns: [
      /cnn\.com/,
      /bbc\.com/,
      /nytimes\.com/,
      /reuters\.com/,
      /medium\.com/,
      /washingtonpost\.com/,
      /theguardian\.com/,
      /forbes\.com/,
      /bloomberg\.com/,
      /npr\.org/,
      /time\.com/,
      /newsweek\.com/,
      /usatoday\.com/,
      /vox\.com/,
      /politico\.com/,
      /cnbc\.com/,
      /aljazeera\.com/,
      /msnbc\.com/,
      /abcnews\.go\.com/,
      /foxnews\.com/,
      /latimes\.com/,
      /thehill\.com/,
      /huffpost\.com/,
      /axios\.com/,
      /propublica\.org/,
      /fortune\.com/,
      /economist\.com/,
      /sciencemag\.org/,
      /nature\.com/,
      /nationalgeographic\.com/,
      /smithsonianmag\.com/,
    ],
  },
  {
    category: 'Learning',
    patterns: [
      /coursera\.org/,
      /udemy\.com/,
      /edx\.org/,
      /stackoverflow\.com/,
      /mdn/,
      /w3schools\.com/,
      /khanacademy\.org/,
      /codecademy\.com/,
      /pluralsight\.com/,
      /lynda\.com/,
      /udacity\.com/,
      /futurelearn\.com/,
      /datacamp\.com/,
      /brilliant\.org/,
      /skillshare\.com/,
      /quizlet\.com/,
      /chegg\.com/,
      /studocu\.com/,
      /researchgate\.net/,
      /academia\.edu/,
      /scribd\.com/,
      /hbr\.org/,
      /classcentral\.com/,
      /coursetalk\.com/,
      /treehouse\.com/,
      /google\.com\/classroom/,
      /zoom\.us/,
      /blackboard\.com/,
      /moodle\.org/,
      /brightspace\.com/,
      /ted\.com/,
    ],
  },
];


const videoCategories = [
  { category: 'Gaming', patterns: [/gameplay/i, /playthrough/i, /gaming/i] },
  { category: 'Music', patterns: [/official music video/i, /lyrics/i, /song/i] },
  { category: 'Tutorial', patterns: [/tutorial/i, /how to/i, /guide/i] },
  { category: 'Tech', patterns: [/review/i, /unboxing/i, /tech/i] },
  { category: 'Entertainment', patterns: [/vlog/i, /funny/i, /comedy/i] },
];

export const categorizeUrl = (domain: string): string => {
  for (const rule of categoryRules) {
    if (rule.patterns.some(pattern => pattern.test(domain))) {
      return rule.category;
    }
  }
  return 'Other';
};

export const categorizeVideo = (title: string, url: string) => {
  const videoId = url.includes('youtube.com/watch?v=')
    ? new URLSearchParams(url.split('?')[1]).get('v')
    : url.includes('youtu.be/')
    ? url.split('youtu.be/')[1]
    : null;

  let category = 'Other';
  for (const cat of videoCategories) {
    if (cat.patterns.some(pattern => pattern.test(title))) {
      category = cat.category;
      break;
    }
  }

  return {
    category,
    title: title.replace(/- YouTube$/, '').trim(),
    videoId,
  };
};