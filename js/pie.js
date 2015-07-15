// 路径配置
        require.config({
            paths: {
                echarts: 'js'
            }
        });
        
        // 使用
        require(
            [
                'echarts',
                'https://rawgithub.com/wy-ang/echarts/master/echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('main')); 
                
                var option = {
                    title:{
                    	text:"站点初步数据统计",
                    	subtext:"纯属虚构",
                    	x:'center'
                    },
                    toolbox:{
                    	show:true,
                    	x:'right',
                    	/*feature:{
                    		mark : {
						        show : true,
						        title : {
						            mark : '辅助线开关',
						            markUndo : '删除辅助线',
						            markClear : '清空辅助线'
						        },
						        lineStyle : {
						            width : 2,
						            color : '#1e90ff',
						            type : 'dashed'
						        }
						    },
						    dataZoom : {
						        show : true,
						        title : {
						            dataZoom : '区域缩放',
						            dataZoomReset : '区域缩放后退'
						        }
						    },
						    dataView : {
						        show : true,
						        title : '数据视图',
						        readOnly: true,
						        lang: ['数据视图', '关闭', '刷新']
						    },
						    magicType: {
						        show : true,
						        title : {
						            line : '折线图切换',
						            bar : '柱形图切换',
						            stack : '堆积',
						            tiled : '平铺',
						            force: '力导向布局图切换',
						            chord: '和弦图切换',
						            pie: '饼图切换',
						            funnel: '漏斗图切换'
						        },
						        option: {
						            // line: {...},
						            // bar: {...},
						            // stack: {...},
						            // tiled: {...},
						            // force: {...},
						            // chord: {...},
						            // pie: {...},
						            // funnel: {...}
						        },
						        type : []
						    },
						    restore : {
						        show : true,
						        title : '还原'
						    },
						    saveAsImage : {
						        show : true,
						        title : '保存为图片',
						        type : 'png',
						        lang : ['点击保存']
						    }
                    	}*/
                    },
                    legend:{
                    	orient:'vertical',
                    	data:['容易','简单','一般','较难','困难'],
                    	x:'left'
                    },
                    series:[
	                    	{
	                    	type:'pie',
	                    	name:'哎呦，我去！',
	                    	clickable:false,
	                    	center:['50%','60%'],
	                    	radius:'50%',
	                    	calculable:true,
	                    	data:[
	                    		{value:100,name:'容易',itemStyle:{normal:{color:'#fbb320'}}},
	                    		{value:200,name:'简单',itemStyle:{normal:{color:'#00bffe'}}},
	                    		{value:300,name:'一般',itemStyle:{normal:{color:'#b400ff'}}},
	                    		{value:400,name:'较难',itemStyle:{normal:{color:'#fa6175'}}},
	                    		{value:500,name:'困难',itemStyle:{normal:{color:'#00d1a2'}}}
	                    	]
	                    }
                    ]

                };
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );