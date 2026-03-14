// blog/docs/.vitepress/config.js
export default {
  // 👇 这里是关键！根据你的仓库名称修改
  // 如果你的仓库名是 xxx.github.io，就填 '/'
  // 如果你的仓库名是 blog，就填 '/blog/'
  base: '/github.io/',
  
  // 网站标题
  title: '我的技术博客',
  // 网站描述
  description: '技术学习与分享',
  
  // 主题配置
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/github.io/' },
      { text: 'Java笔记', link: '/github.io/Java基础学习笔记' }
    ],
    
    // 侧边栏
    sidebar: [
      {
        text: 'Java 基础',
        items: [
          { text: 'Java基础学习笔记', link: '/github.io/Java基础学习笔记' }
        ]
      }
    ]
  }
}