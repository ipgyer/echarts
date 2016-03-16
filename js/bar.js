require.config({
    paths: {
        echarts: 'js'
    }
});

require(
	[
        'echarts',
        'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
    ],
    function(ec){
    	var myChart = ec.init(document.getElementById('wrap')); 

    	var option = {
    		title:{
    			text:'柱状图',
    			subtext:'纯属虚构',
    			x:'center'
    		},
    		tooltip : {
		        trigger: 'axis'
		    },
		    grid:{
		    	backgroundColor:'#FFF',
		    	borderWidth:0,
		    	borderColor:'#f1f1f3',
		    	z:1
		    },
		    areaStyle:{
		    	color:'#FF0',
		    	type:'default'
		    },
    		series:[
    			{
    				type:'bar',
    				data:[1.0,2.1,3.2,4.3,5.4,6.5,7.6,7.6,6.5,5.4,4.3,3.2,2.1,1.0],
    				barCategoryGap: '10%',
    				itemStyle:{
		    			normal:{
		    				color:'#00bffe',
		    				barBorderRadius:[5, 5, 0, 0],
		    				label:{
							    show: true,
							    position:'top',
							    textStyle:{
							    	color:'#00bffe'
							    }
							} 
		    			}
		    		}
    			}
    		],
    		axis:{
    			show:'true',
    			type:'value',
    			name:'aaa'
    		},
    		xAxis:[
    			{
    				data:['先秦诸子百家1','近代文学1','国外文学1','历史试卷类1','散文类1','论述类文本阅读1','实用类文本阅读1','先秦诸子百家','近代文学','国外文学','历史试卷类','散文类','论述类文本阅读','实用类文本阅读']
    			}
    		],
    		yAxis:[
    			{
    				type:'value'
    			}
    		]
    	}
    	// 为echarts对象加载数据 
        myChart.setOption(option); 
    }
)