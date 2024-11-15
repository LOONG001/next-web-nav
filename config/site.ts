export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "ev1l0o4g's nav",
  description: "",
  mainNav: [],
  links: {
    twitter: "https://x.com/ducoduko",
    github: "https://github.com/LOONG001",
  },
}

export interface NavLink {
  /** 站点图标 */
  icon?: string
  /** 站点名称 */
  title: string
  /** 站点名称 */
  desc?: string
  /** 站点链接 */
  link: string
}

type NavData = {
  title: string
  items: NavLink[]
}

export const NavData: NavData[] = [
  {
    title: "常用工具",
    items: [
      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/UTjFYEzMSYVwzxIGVhMu.png",
        title: "语雀",
        desc: "专业的云端知识库",
        link: "https://www.yuque.com/",
      },
      {
        icon: "https://github.com/favicon.ico",
        title: "GitHub",
        desc: "GitHub开源社区",
        link: "https://github.com/",
      },
      {
        icon: "https://cn.noxtoolbox.com/noxfavicon.ico",
        title: "在线工具箱",
        desc: "开发人员的工具箱",
        link: "https://cn.noxtoolbox.com/",
      },
      {
        icon: "https://wx.zsxq.com/favicon.ico",
        title: "知识星球",
        desc: "",
        link: "https://wx.zsxq.com/",
      },
      {
        icon: "https://mp.weixin.qq.com/favicon.ico",
        title: "公众号平台",
        desc: "微信公众平台",
        link: "https://mp.weixin.qq.com/",
      },
      {
        icon: "https://zhimap.com/favicon.ico",
        title: "ZhiMap",
        desc: "免费思维导图",
        link: "https://zhimap.com/",
      },
      {
        icon: "https://www.bilibili.com/favicon.ico",
        title: "哔哩哔哩",
        desc: "干杯的地方",
        link: "https://www.bilibili.com/",
      },
      {
        icon: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico",
        title: "Gmail",
        desc: "谷歌邮箱",
        link: "https://mail.google.com/",
      },
      {
        icon: "https://ip.tool.chinaz.com/",
        title: "站长工具",
        desc: "",
        link: "https://ip.tool.chinaz.com/",
      },
      {
        icon: "https://app.astralapp.com/favicon-32x32.png",
        title: "Astral",
        desc: "方便查看GitHub Stars",
        link: "https://app.astralapp.com/",
      },
      {
        icon: "https://rss.anyant.com/favicon.ico",
        title: "蚁阅",
        desc: "网页版RSS阅读器",
        link: "https://rss.anyant.com/",
      },
      {
        icon: "https://www.runoob.com/favicon.ico",
        title: "菜鸟教程",
        desc: "学的不仅是技术，更是梦想！",
        link: "https://www.runoob.com/",
      },
      {
        icon: "https://file.ipadown.com/tophub/assets/images/favicon/favicon-32x32.png",
        title: "今日热榜",
        desc: "",
        link: "https://tophub.today/",
      },
    ],
  },

  {
    title: "社区论坛",
    items: [
      {
        icon: "https://xz.aliyun.com/static/icon/favicon.ico",
        title: "先知社区",
        desc: "",
        link: "https://xz.aliyun.com/",
      },
      {
        icon: "https://forum.butian.net/ico.png",
        title: "奇安信攻防社区",
        desc: "",
        link: "https://forum.butian.net/",
      },
      {
        icon: "https://www.52pojie.cn/favicon.ico",
        title: "吾爱破解",
        desc: "",
        link: "https://www.52pojie.cn/",
      },
      {
        icon: "https://yaklang.com/img/favicon.ico",
        title: "Yak Language",
        desc: "",
        link: "https://yaklang.com/",
      },
      {
        icon: "https://zone.huoxian.cn/favicon.ico",
        title: "火线Zone",
        desc: "",
        link: "https://zone.huoxian.cn/",
      },
      {
        icon: "https://forum.ywhack.com/favicon.ico",
        title: "棱角社区",
        desc: "",
        link: "https://forum.ywhack.com/",
      },
      {
        icon: "https://www.kanxue.com/view/img/favicon.ico",
        title: "看雪学苑",
        desc: "❄",
        link: "https://www.kanxue.com/",
      },
      {
        icon: "https://x.threatbook.com/favicon.ico",
        title: "微步在线",
        desc: "",
        link: "https://x.threatbook.com/",
      },
      {
        icon: "https://s3.ssl.qhres2.com/static/02b5158bbb6adeac.ico",
        title: "安全客",
        desc: "",
        link: "https://www.anquanke.com/",
      },
      {
        icon: "https://www.t00ls.com/favicon.ico",
        title: "土司社区",
        desc: "别看我，我没号！",
        link: "https://www.t00ls.com/",
      },
      {
        icon: "https://nosec.org/home/image/favicon.ico",
        title: "NOSEC",
        desc: "",
        link: "https://nosec.org/",
      },
      {
        icon: "https://www.secpulse.com/favicon.ico",
        title: "安全脉搏",
        desc: "",
        link: "https://www.secpulse.com/",
      },
      {
        icon: "https://stack.chaitin.com/favicon.ico",
        title: "CT Stack",
        desc: "",
        link: "https://stack.chaitin.com/",
      },
      {
        icon: "https://sec-wiki.com/favicon.ico",
        title: "SecWiki",
        desc: "",
        link: "https://sec-wiki.com/",
      },
      {
        icon: "https://forum.90sec.com/uploads/default/optimized/2X/0/02c0b50fd002ab519248513ca5832fc789e2355a_2_32x32.png",
        title: "90Sec",
        desc: "",
        link: "https://forum.90sec.com/",
      },
      {
        icon: "https://storage.tttang.com/static/images/logo.png",
        title: "跳跳糖",
        desc: "哥，快更新啊！",
        link: "https://tttang.com/",
      },
      {
        icon: "https://unsafe.sh/static/icon.png",
        title: "不安全",
        desc: "",
        link: "https://unsafe.sh/",
      },
      {
        icon: "https://comm.pgpsec.cn/wp-content/uploads/2024/05/AItx-150x150.png",
        title: "鹏组安全社区",
        desc: "",
        link: "https://comm.pgpsec.cn/",
      },
      {
        icon: "https://huntr.com/favicon.ico",
        title: "huntr",
        desc: "",
        link: "https://huntr.com/bounties/hacktivity",
      },
      {
        icon: "https://pentester.land/favicon.ico",
        title: "Pentester Land",
        desc: "",
        link: "https://pentester.land/writeups/",
      },
      {
        icon: "https://www.bugbountyhunting.com/favicon.ico",
        title: "",
        desc: "",
        link: "https://www.bugbountyhunting.com/",
      },
      {
        icon: "https://www.v2ex.com/static/img/v2ex.ico",
        title: "V2EX",
        desc: "",
        link: "https://www.v2ex.com/",
      },
    ],
  },
  {
    title: "信息收集",
    items: [
      {
        icon: "https://fofa.info/favicon.ico",
        title: "fofa",
        desc: "佛法",
        link: "https://fofa.info/",
      },
      {
        icon: "https://hunter.qianxin.com/geagle/static/favicon.ico",
        title: "鹰图",
        desc: "",
        link: "https://hunter.qianxin.com/",
      },
      {
        icon: "https://quake.360.net/quake/static/index/favicon.ico",
        title: "Quake",
        desc: "",
        link: "https://quake.360.net/",
      },
      {
        icon: "https://www.zoomeye.org/favicon.ico",
        title: "ZoomEye",
        desc: "",
        link: "https://www.zoomeye.org/",
      },
      {
        icon: "https://www.daydaymap.com/favicon.svg",
        title: "DayDayMap",
        desc: "",
        link: "https://www.daydaymap.com/",
      },
      {
        icon: "https://0.zone/favicon.png",
        title: "零零信安",
        desc: "00",
        link: "https://0.zone/",
      },
      {
        icon: "https://www.shodan.io/static/img/favicon-60c1b1cd.png",
        title: "Shodan",
        desc: "",
        link: "https://www.shodan.io/",
      },
      {
        icon: "https://search.censys.io/static/img/favicon.ico",
        title: "Censys",
        desc: "",
        link: "https://search.censys.io/",
      },
      {
        icon: "https://searchcode.com/static/favicon.ico",
        title: "searchcode",
        desc: "",
        link: "https://searchcode.com/",
      },
      {
        icon: "https://beian.miit.gov.cn/favicon.ico",
        title: "ICP备案",
        desc: "",
        link: "https://beian.miit.gov.cn/",
      },
      {
        icon: "https://cdn.tianyancha.com/wap/images/icon-hires-192x192.png",
        title: "天眼查",
        desc: "",
        link: "https://www.tianyancha.com/",
      },
      {
        icon: "https://api.u51.com/nodejs-xiaolanben-com/public/logo.png",
        title: "小蓝本",
        desc: "",
        link: "https://www.xiaolanben.com/",
      }
    ],
  },
  {
    title: "在线工具",
    items: [
      {
        icon: "https://hexed.it/favicon.ico",
        title: "HexEd",
        desc: "在线16进制编辑器",
        link: "https://hexed.it/",
      },
      {
        icon: "https://ihateregex.io/favicon.ico",
        title: "iHateRegex",
        desc: "",
        link: "https://ihateregex.io/",
      },
      {
        icon: "https://any-rule.vercel.app/favicon.ico",
        title: "正则大全",
        desc: "",
        link: "https://any-rule.vercel.app/",
      },
      {
        icon: "https://regex.ai/favicon.png",
        title: "Regex.ai",
        desc: "",
        link: "https://regex.ai/",
      },
      {
        icon: "https://www.revshells.com/favicon.442ac9e8.ico",
        title: "Reverse Shell Generator",
        desc: "",
        link: "https://www.revshells.com/",
      },
      {
        icon: "https://www.ddosi.org/wp-content/uploads/2021/01/A.png",
        title: "在线密码字典生成器",
        desc: "",
        link: "https://www.ddosi.org/pass8/",
      },
      {
        icon: "https://xssjs.com/favicon.ico",
        title: "XSS平台",
        desc: "",
        link: "https://xssjs.com/",
      },
      {
        icon: "https://cmd5.com/favicon.ico",
        title: "CMD5",
        desc: "",
        link: "https://cmd5.com/",
      },
      {
        icon: "https://www.somd5.com/favicon.ico",
        title: "somd5",
        desc: "",
        link: "https://www.somd5.com/",
      },
      {
        icon: "https://md5decrypt.net/includes/favicon-48x48.ico",
        title: "Md5 Encrypt & Decrypt",
        desc: "",
        link: "https://md5decrypt.net/en/",
      },
      {
        icon: "https://eyes.sh/static/icon.png",
        title: "eyes-dnslog",
        desc: "",
        link: "https://eyes.sh/",
      },
      {
        icon: "http://dnslog.cn/favicon.ico",
        title: "dnslog",
        desc: "",
        link: "http://dnslog.cn/",
      },
      {
        icon: "",
        title: "dig.pm",
        desc: "",
        link: "https://dig.pm/",
      },
      {
        icon: "http://ceye.io/static/ceye.icon",
        title: "ceye",
        desc: "",
        link: "http://ceye.io/",
      },
      {
        icon: "https://www.shentoushi.top/av/favicon.ico",
        title: "网络设备默认口令查询",
        desc: "",
        link: "https://www.shentoushi.top/av/",
      },
      {
        icon: "https://www.shentoushi.top/av/favicon.ico",
        title: "Windows杀软在线对比",
        desc: "",
        link: "https://www.shentoushi.top/av/av.php",
      },
      {
        icon: "https://www.shentoushi.top/av/favicon.ico",
        title: "编码转换",
        desc: "",
        link: "https://www.shentoushi.top/av/decoder.php",
      },
      {
        icon: "https://www.shentoushi.top/av/favicon.ico",
        title: "下载命令快捷生成",
        desc: "",
        link: "https://www.shentoushi.top/av/File_Download_Generator.php",
      },
      {
        icon: "https://www.shentoushi.top/av/favicon.ico",
        title: "密码哈希生成",
        desc: "",
        link: "https://www.shentoushi.top/av/generate_hash.php",
      },
      {
        icon: "https://book.shentoushi.top/favicon.ico",
        title: "提权命令",
        desc: "",
        link: "https://www.shentoushi.top/av/info.php",
      },
      {
        icon: "https://book.shentoushi.top/favicon.svg",
        title: "RedTeam And Command",
        desc: "",
        link: "https://book.shentoushi.top/",
      },
      {
        icon: "https://forum.ywhack.com/favicon.ico",
        title: "在线解密",
        desc: "",
        link: "https://forum.ywhack.com/decrypt.php",
      },
      {
        icon: "https://xssor.io/s/favicon.ico",
        title: "XSS'OR",
        desc: "",
        link: "https://xssor.io/",
      },
      {
        icon: "https://gtfobins.github.io/assets/logo.png",
        title: "GTFOBins",
        desc: "",
        link: "https://gtfobins.github.io/",
      },
      {
        icon: "https://explainshell.com/favicon.ico",
        title: "explainshell",
        desc: "",
        link: "https://explainshell.com/",
      },
      {
        icon: "https://wadcoms.github.io/assets/logo.png",
        title: "WADComs",
        desc: "",
        link: "https://wadcoms.github.io/",
      },
      {
        icon: "https://amsi.fail/img/menu.png",
        title: "AMSI.fail",
        desc: "",
        link: "https://amsi.fail/",
      },
      {
        icon: "https://hijacklibs.net/assets/img/dll.png",
        title: "HijackLibs",
        desc: "",
        link: "https://hijacklibs.net/",
      },
      {
        icon: "https://lolbas-project.github.io/assets/favicon.png",
        title: "LOLBAS",
        desc: "",
        link: "https://lolbas-project.github.io/",
      },
      {
        icon: "https://www.exploit-db.com/favicon.ico",
        title: "IP溯源",
        desc: "",
        link: "https://ip.sy/",
      },
      {
        icon: "https://command-not-found.com/favicon.ico",
        title: "command-not-found",
        desc: "",
        link: "https://command-not-found.com/",
      },
      {
        icon: "https://jwt.io/img/favicon/favicon-32x32.png",
        title: "JSON Web Tokens",
        desc: "",
        link: "https://jwt.io/",
      },
      {
        icon: "https://curlconverter.com/favicon.ico",
        title: "Convert curl commands to code",
        desc: "",
        link: "https://curlconverter.com/",
      },
      {
        icon: "https://editor.swagger.io/dist/favicon-32x32.png",
        title: "Swagger Editor",
        desc: "",
        link: "https://editor.swagger.io/",
      },
      {
        icon: "https://tilipa.zlsam.com/loger/favicon.ico",
        title: "Gritlog",
        desc: "",
        link: "https://tilipa.zlsam.com/loger/",
      },
      {
        icon: "https://mintlify.s3-us-west-1.amazonaws.com/projectdiscovery/_generated/favicon/favicon.ico",
        title: "Nuclei Templates Directory",
        desc: "",
        link: "https://nuclei-templates.netlify.app/",
      },
      {
        icon: "https://poc.xray.cool/favicon.ico",
        title: "规则实验室 - XRAY",
        desc: "",
        link: "https://poc.xray.cool/",
      },
      {
        icon: "https://cloud.projectdiscovery.io/favicon-32x32.png",
        title: "ProjectDiscovery Cloud Platform",
        desc: "",
        link: "https://cloud.projectdiscovery.io/",
      },
      {
        icon: "https://web2hack.org/favicon.ico",
        title: "XSSEE",
        desc: "",
        link: "https://web2hack.org/xssee/",
      },
    ],
  },
  {
    title: "大佬博客",
    items: [
      {
        icon: "https://www.ddosi.org/wp-content/uploads/2021/01/A.png",
        title: "🔰雨苁ℒ🔰",
        desc: "",
        link: "https://www.ddosi.org/",
      },
      {
        icon: "https://b1ue.cn/favicon.ico",
        title: "浅蓝博客",
        desc: "",
        link: "https://b1ue.cn/",
      },
      {
        icon: "https://www.leavesongs.com/static/cactus/images/favicon.ico",
        title: "离别歌",
        desc: "",
        link: "https://www.leavesongs.com/",
      },
      {
        icon: "https://wjlshare.com/wp-content/uploads/2021/05/111.jpg",
        title: "天下大木头",
        desc: "",
        link: "https://wjlshare.com/",
      },
      {
        icon: "https://payloads.online/favicon.ico",
        title: "倾旋的博客",
        desc: "",
        link: "https://payloads.online/",
      },
      {
        title: "Zgao's blog",
        desc: "",
        icon: "https://zgao.top/wp-content/uploads/2024/06/cropped-%E8%B5%84%E6%BA%90-20-32x32.png",
        link: "https://zgao.top/",
      },
      {
        title: "safe6'blog",
        desc: "",
        icon: "http://www.safe6.cn/public/favicon.png",
        link: "http://www.safe6.cn/",
      },
      {
        title: "print('')",
        desc: "",
        icon: "https://www.o2oxy.cn/wp-content/themes/JieStyle-Two/images/favicon.ico",
        link: "https://www.o2oxy.cn/",
      },
      {
        title: "Adminxe's Blog",
        desc: "",
        icon: "https://www.adminxe.com/wp-content/uploads/2019/10/cropped-timg-1-32x32.jpg",
        link: "https://www.adminxe.com/",
      },
      {
        title: "TeamsSix",
        desc: "",
        icon: "https://teamssix.com/favicon.png",
        link: "https://teamssix.com/",
      },
      {
        title: "Artio Blog",
        desc: "",
        icon: "https://artio-li.github.io/static/img/favicon.ico",
        link: "https://artio-li.github.io/",
      },
      {
        title: "PeiQi文库",
        desc: "",
        icon: "https://peiqi.wgpsec.org/img/home.svg",
        link: "https://peiqi.wgpsec.org/",
      },
      {
        title: "BigYoung安全",
        desc: "",
        icon: "https://bigyoung.cn/static/blog/img/bigyoung_logo.ico",
        link: "https://bigyoung.cn/",
      },
      {
        title: "AabyssZG's Blog",
        desc: "",
        icon: "https://blog.zgsec.cn/favicon_16.ico",
        link: "https://blog.zgsec.cn/",
      },
      {
        title: "3gstudent-Blog",
        desc: "",
        icon: "https://3gstudent.github.io/assets/bullet.png",
        link: "https://3gstudent.github.io/",
      },
      {
        title: "素十八",
        desc: "",
        icon: "https://su18.org/favicon.ico",
        link: "https://su18.org/",
      },
      {
        title: "TRY博客",
        desc: "",
        icon: "https://www.nctry.com/favicon.ico",
        link: "https://www.nctry.com/",
      },
      {
        title: "算命縖子",
        desc: "",
        icon: "http://www.nmd5.com/favicon.ico",
        link: "http://www.nmd5.com/",
      },
      {
        title: "YX'BLOG",
        desc: "",
        icon: "http://www.535yx.cn/yx.png",
        link: "http://535yx.cn/",
      },
      {
        title: "Victory",
        desc: "",
        icon: "https://txluck.github.io/img/logo.png",
        link: "https://txluck.github.io/",
      },
      {
        title: "林中小屋",
        desc: "",
        icon: "https://antipassion.github.io/images/favicon-16x16-next.png",
        link: "https://antipassion.github.io/",
      },
      {
        title: "0r@nge の窝",
        desc: "",
        icon: "https://0range-x.github.io/images/icon.jpg",
        link: "https://0range-x.github.io/",
      },
    ],
  },
  {
    title: "靶场练习",
    items: [
      {
        icon: "https://portswigger.net/content/images/logos/favicon.ico",
        title: "portswigger web labs",
        desc: "",
        link: "https://portswigger.net/web-security/all-labs",
      },
      {
        icon: "https://vulfocus.cn/favicon.ico",
        title: "vulfocus",
        desc: "",
        link: "https://vulfocus.cn/",
      },
      {
        icon: "http://www.nanhack.com/favicon.ico",
        title: "男黑客|在线渗透测试靶场",
        desc: "",
        link: "http://www.nanhack.com/",
      },
      {
        icon: "https://vulhub.org/img/favicon.ico",
        title: "Vulhub",
        desc: "",
        link: "https://vulhub.org/",
      },
      {
        icon: "https://github.com/favicon.ico",
        title: "APISandbox",
        desc: "",
        link: "https://github.com/API-Security/APISandbox",
      },
      {
        icon: "",
        title: "VulnStack",
        desc: "",
        link: "http://vulnstack.qiyuanxuetang.net/vuln/",
      },
      {
        title: "metarget",
        desc: "",
        icon: "https://github.com/favicon.ico",
        link: "https://github.com/Metarget/metarget",
      },
      {
        title: "VulnHub",
        desc: "",
        icon: "https://www.vulnhub.com/static/img/favicon.ico",
        link: "https://www.vulnhub.com/",
      },
      {
        title: "Hello-Java-Sec",
        desc: "",
        icon: "https://github.com/favicon.ico",
        link: "https://github.com/j3ers3/Hello-Java-Sec",
      },
      {
        title: "春秋云镜",
        desc: "",
        icon: "https://yunjing.ichunqiu.com/favicon.ico",
        link: "https://yunjing.ichunqiu.com/",
      },
      {
        title: "渊龙Sec团队靶场",
        desc: "",
        icon: "http://ctf.aabyss.cn/assets/images/avatars/pikachu1.png",
        link: "http://ctf.aabyss.cn/",
      },
      {
        title: "Hack The Box",
        desc: "",
        icon: "https://www.hackthebox.com/images/landingv3/favicon.png",
        link: "https://www.hackthebox.com/",
      },
      {
        title: "CTFHub",
        desc: "",
        icon: "https://www.ctfhub.com/favico.png",
        link: "https://www.ctfhub.com/",
      },
    ],
  },
  {
    title: "学无止境",
    items: [
      {
        icon: "https://wiki.moonteams.com/favicon.ico",
        title: "暗月知识分享中心",
        desc: "",
        link: "https://wiki.moonteams.com/index.php",
      },
      {
        icon: "https://govuln.com/static/img/favicon.png",
        title: "安全文摘",
        desc: "",
        link: "https://govuln.com/news/",
      },
      {
        icon: "https://swisskyrepo.github.io/PayloadsAllTheThings/assets/images/favicon.png",
        title: "Payloads All The Things",
        desc: "",
        link: "https://swisskyrepo.github.io/PayloadsAllTheThings/",
      },
      {
        icon: "https://gitbook.se7ensec.cn/~gitbook/icon?size=small&theme=dark",
        title: "肾透测试中心",
        desc: "",
        link: "https://gitbook.se7ensec.cn/",
      },
      {
        icon: "https://wiki.teamssix.com/img/favicon.ico",
        title: "T Wiki",
        desc: "",
        link: "https://wiki.teamssix.com/",
      },
      {
        icon: "https://www.heresecurity.wiki/~gitbook/icon?size=small&theme=dark",
        title: "PENETRATION NOTE",
        desc: "",
        link: "https://www.heresecurity.wiki/",
      },
      {
        icon: "https://websec.readthedocs.io/favicon.ico",
        title: "Web安全学习笔记",
        desc: "",
        link: "https://websec.readthedocs.io/zh/latest/index.html",
      },
      {
        icon: "http://wy.zone.ci/favicon.ico",
        title: "乌云镜像",
        desc: "",
        link: "http://wy.zone.ci/",
      },
      {
        icon: "https://paper.seebug.org/static/images/favicon.ico",
        title: "Paper",
        desc: "",
        link: "https://paper.seebug.org/",
      },
      {
        icon: "https://github.com/favicon.ico",
        title: "Awesome-Redteam",
        desc: "",
        link: "https://github.com/Threekiii/Awesome-Redteam",
      },
      {
        icon: "https://github.com/favicon.ico",
        title: "Active-Directory-Pentest-Notes",
        desc: "",
        link: "https://github.com/uknowsec/Active-Directory-Pentest-Notes",
      },
      {
        icon: "https://sqlwiki.netspi.com/assets/images/favicon.ico",
        title: "NetSPI SQL Injection Wiki",
        desc: "",
        link: "https://sqlwiki.netspi.com/",
      },
      {
        icon: "",
        title: "安全手册",
        desc: "",
        link: "https://_thorns.gitbooks.io/sec/content/",
      },
      {
        icon: "",
        title: "The SQL Injection Knowledge Base",
        desc: "",
        link: "https://websec.ca/kb/sql_injection",
      },
      {
        icon: "https://github.com/favicon.ico",
        title: "Emergency-Response-Notes",
        desc: "",
        link: "https://github.com/Bypass007/Emergency-Response-Notes",
      },
      {
        icon: "https://github.com/favicon.ico",
        title: "Emergency-response-notes",
        desc: "",
        link: "https://github.com/wpsec/Emergency-response-notes",
      },
      {
        icon: "https://damit5-github-io.vercel.app/gitbook/images/favicon.ico",
        title: "d4m1ts 知识库",
        desc: "",
        link: "https://damit5-github-io.vercel.app/",
      },
      {
        icon: "https://www.javasec.org/gitbook/images/favicon.ico",
        title: "Java Web安全",
        desc: "",
        link: "https://www.javasec.org/",
      },
      {
        icon: "https://lzcloudsecurity.gitbook.io/yun-an-quan-gong-fang-ru-men/~gitbook/icon?size=small&theme=dark",
        title: "云安全攻防入门",
        desc: "",
        link: "https://lzcloudsecurity.gitbook.io/yun-an-quan-gong-fang-ru-men",
      },
      {
        icon: "https://learn.microsoft.com/favicon.ico",
        title: "Win32 api",
        desc: "",
        link: "https://learn.microsoft.com/zh-cn/windows/win32/api/memoryapi/",
      },
      {
        icon: "https://ckcsec.oss-cn-hangzhou.aliyuncs.com/img/ckc.jpg",
        title: "CKCsec安全研究院面向网络安全从业者的知识文库",
        desc: "",
        link: "https://wiki.ckcsec.cn/",
      },
    ],
  },
  {
    title: "白菜src",
    items: [
      {
        icon: "https://src.sjtu.edu.cn/static/img/main.ico",
        title: "edu src",
        desc: "",
        link: "https://src.sjtu.edu.cn/",
      },
      {
        icon: "https://www.butian.net/favicon.ico",
        title: "补天",
        desc: "",
        link: "https://www.butian.net/",
      },
      {
        icon: "https://www.cnvd.org.cn/favicon.ico",
        title: "CNVD",
        desc: "",
        link: "https://www.cnvd.org.cn/",
      },
      {
        icon: "https://www.vulbox.com/favicon.svg",
        title: "漏洞盒子",
        desc: "",
        link: "https://www.vulbox.com/",
      },
      {
        icon: "https://www.hackerone.com/sites/default/files/favicon_0.ico",
        title: "hackerone",
        desc: "",
        link: "https://www.hackerone.com/",
      },
      {
        icon: "https://zeroday.hitcon.org/images/favicon/favicon.png",
        title: "HITCON ZeroDay",
        desc: "",
        link: "https://zeroday.hitcon.org/",
      },
      {
        icon: "https://security.tencent.com/static/v2.0/images/favicon.ico",
        title: "Tencent src",
        desc: "",
        link: "https://security.tencent.com/"
      },
      {
        icon: "https://img.alicdn.com/tfs/TB1LsRwgFzqK1RjSZSgXXcpAVXa-40-40.png",
        title: "Alibaba src",
        desc: "",
        link: "https://security.alibaba.com/"
      },
      {
        icon: "https://security.jd.com/static/images/favicon.png",
        title: "JD src",
        desc: "",
        link: "https://security.jd.com/"
      },
      {
        icon: "https://security.360.cn/static/img/base/logo-icon.png",
        title: "ThreeSixZero src",
        desc: "",
        link: "https://security.360.cn/"
      },
      {
        icon: "https://i.alipayobjects.com/common/favicon/favicon.ico",
        title: "蚂蚁src",
        desc: "",
        link: "https://security.alipay.com/"
      },
      {
        icon: "https://cdn.cnbj1.fds.api.mi-img.com/misrc/cdn/favicon.ico",
        title: "Mi src",
        desc: "",
        link: "https://sec.xiaomi.com/"
      },
      {
        icon: "https://sec.vip.com/images/far.ico",
        title: "唯品会src",
        desc: "",
        link: "https://sec.vip.com/"
      },
      {
        icon: "https://security.qunar.com/favicon.ico",
        title: "ToWhere src",
        desc: "",
        link: "https://security.qunar.com/"
      },
      {
        icon: "https://sec.ly.com/Public/Index/images/logo.ico",
        title: "同程旅行src",
        desc: "",
        link: "https://sec.ly.com/"
      },
      {
        icon: "https://sec.tuniu.com/assets/imgs/favicon.ico",
        title: "途牛src",
        desc: "",
        link: "https://sec.tuniu.com/"
      },
      {
        icon: "https://bsrc.baidu.com/v2/statics/static/favicon.ico",
        title: "Baidu src",
        desc: "",
        link: "https://bsrc.baidu.com/"
      },
      {
        icon: "https://sec.didichuxing.com/favicon.ico",
        title: "滴滴 src",
        desc: "",
        link: "https://sec.didichuxing.com/"
      },
      {
        icon: "https://aq.163.com/favicon.ico",
        title: "网易src",
        desc: "",
        link: "https://aq.163.com/"
      },
      {
        icon: "https://i.ys7.com/src/common/imgs/icons/favicon.ico",
        title: "萤石 src",
        desc: "",
        link: "https://ysrc.ys7.com/"
      },
      {
        icon: "https://security.pingan.com/favicon.ico",
        title: "平安 src",
        desc: "",
        link: "https://security.pingan.com/"
      },
      {
        icon: "https://sfsrc.sf-express.com/logo.svg",
        title: "顺丰 src",
        desc: "",
        link: "https://sfsrc.sf-express.com/"
      },
      {
        icon: "https://security.unionpay.com/favicon.ico",
        title: "银联 src",
        desc: "",
        link: "https://security.unionpay.com/"
      },
      {
        icon: "https://security1.djicdn.com/djisrc/public/img/head-logo.7f1895f.svg",
        title: "大疆 src",
        desc: "",
        link: "https://security.dji.com/"
      },
      {
        icon: "https://static.hdslb.com/images/favicon.ico",
        title: "bilibili src",
        desc: "",
        link: "https://security.bilibili.com/"
      },
      {
        icon: "https://www.tencent.com/favicon.ico",
        title: "腾讯 src",
        desc: "",
        link: "https://security.tencent.com/"
      },
      {
        icon: "https://security.oppo.com/cn/favicon.ico",
        title: "OPPO src",
        desc: "",
        link: "https://security.oppo.com/cn/"
      },
      {
        icon: "https://x.security.tencent.com/upload_files/202003/f847f7bd28acae45efb5b99d72e70df3.png",
        title: "zsxq src",
        desc: "",
        link: "https://security.zsxq.com/"
      },
      {
        icon: "https://security.kuaishou.com/title.png",
        title: "快手 src",
        desc: "",
        link: "https://security.kuaishou.com/"
      },
    ]
  },
  {
    title: "漏洞威胁情报",
    items: [
      {
        icon: "https://www.exploit-db.com/favicon.ico",
        title: "Exploit Database",
        desc: "",
        link: "https://www.exploit-db.com/"
      },
      {
        icon: "https://avd.aliyun.com/static/favicon.ico",
        title: "阿里云漏洞库",
        desc: "",
        link: "https://avd.aliyun.com/"
      },
      {
        icon: "https://www.seebug.org/favicon.ico",
        title: "Seebug",
        desc: "",
        link: "https://www.seebug.org/"
      },
      {
        icon: "https://vi.strobes.co/favicon.svg",
        title: "Strobes VI",
        desc: "",
        link: "https://vi.strobes.co/cves/list"
      },
      {
        icon: "https://www.oscs1024.com/oscs.svg",
        title: "OSCS",
        desc: "",
        link: "https://www.oscs1024.com/cm"
      },
      {
        icon: "https://stack.chaitin.com/favicon.ico",
        title: "长亭漏洞库",
        desc: "",
        link: "https://stack.chaitin.com/vuldb/index"
      },
      {
        icon: "https://cn.0day.today/favicon.ico",
        title: "0day.today",
        desc: "",
        link: "https://cn.0day.today/"
      },
    ]
  },
  {
    title: "趣站",
    items: [
      {
        icon: "https://law.ai2045.com/favicon.ico",
        title: "AI法律助手",
        desc: "",
        link: "https://law.ai2045.com/"
      },
      {
        icon: "https://amymind.com/favicon.ico",
        title: "AmyMind - AI Mind Mapping App",
        desc: "",
        link: "https://amymind.com/"
      },
      {
        icon: "https://drugs.dxy.cn/pc/imgs/logo.png",
        title: "丁香园用药助手",
        desc: "",
        link: "https://drugs.dxy.cn/pc"
      },
    ]
  },
]
