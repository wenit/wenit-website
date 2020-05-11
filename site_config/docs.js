export default {
  'en-us': {
    sidemenu: [
      {
        title: 'header title',
        children: [
          {
            title: 'demo1',
            link: '/en-us/docs/demo1.html',
          },
          {
            title: 'demo2',
            link: '/en-us/docs/demo2.html',
          },
          {
            title: 'dir',
            opened: true,
            children: [
              {
                title: 'demo3',
                link: '/en-us/docs/dir/demo3.html',
              },
            ],
          },
        ],
      },
    ],
    barText: 'Documentation',
  },
  'zh-cn': {
    sidemenu: [
      {
        title: 'Java开发',
        children: [
          {
            title: '示例1',
            link: '/zh-cn/docs/demo1.html',
          },
          {
            title: '示例2',
            link: '/zh-cn/docs/demo2.html',
          },
          {
            title: 'SpringBoot',
            opened: false,
            children: [
              {
                title: '示例3',
                link: '/zh-cn/docs/dir/demo3.html',
              },
            ],
          },
          {
            title: 'SpringCloud',
            opened: false,
            children: [
              {
                title: '示例3',
                link: '/zh-cn/docs/dir/demo3.html',
              },
            ],
          },
          {
            title: 'Dubbo',
            opened: false,
            children: [
              {
                title: '示例3',
                link: '/zh-cn/docs/dir/demo3.html',
              },
            ],
          },
        ],
      },
      {
        title: '前端开发',
        children: [
          {
            title: '示例1',
            link: '/zh-cn/docs/demo1.html',
          },
          {
            title: '示例2',
            link: '/zh-cn/docs/demo2.html',
          },
          {
            title: '目录',
            opened: true,
            children: [
              {
                title: '示例3',
                link: '/zh-cn/docs/dir/demo3.html',
              },
            ],
          },
        ],
      },
      {
        title: 'Go开发',
        children: [
          {
            title: 'Go基础',
            link: '/zh-cn/docs/go/base.html',
          },
          {
            title: '示例2',
            link: '/zh-cn/docs/demo2.html',
          },
          {
            title: '目录',
            opened: true,
            children: [
              {
                title: '示例3',
                link: '/zh-cn/docs/dir/demo3.html',
              },
            ],
          },
        ],
      },
      {
        title: '环境集成',
        children: [
          {
            title: 'Nexus私服',
            opened: false,
            children: [
              {
                title: '环境搭建',
                link: '/zh-cn/docs/dir/demo3.html',
              },
              {
                title: 'Maven私服配置',
                link: '/zh-cn/docs/dir/demo3.html',
              },
              {
                title: 'NPM私服配置',
                link: '/zh-cn/docs/dir/demo3.html',
              },
              {
                title: 'Go私服配置',
                link: '/zh-cn/docs/dir/demo3.html',
              },
            ],
          },
          {
            title: 'Jenkins',
            opened: false,
            children: [
              {
                title: '环境搭建',
                link: '/zh-cn/docs/dir/demo3.html',
              },
              {
                title: '配置Job',
                link: '/zh-cn/docs/dir/demo3.html',
              },
            ],
          },
          {
            title: 'Nginx正向代理',
            link: '/zh-cn/docs/demo2.html',
          },
          {
            title: 'Nginx反向代理',
            link: '/zh-cn/docs/demo2.html',
          },
          {
            title: 'Redis环境搭建',
            link: '/zh-cn/docs/demo2.html',
          },
          {
            title: 'Zookeeper环境搭建',
            link: '/zh-cn/docs/demo2.html',
          },
        ],
      },
    ],
    
    barText: '文档',
  },
};
