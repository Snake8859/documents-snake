(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{404:function(v,_,t){"use strict";t.r(_);var l=t(19),a=Object(l.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"地图投影"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#地图投影"}},[v._v("#")]),v._v(" 地图投影")]),v._v(" "),t("h2",{attrs:{id:"空间参考系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#空间参考系统"}},[v._v("#")]),v._v(" 空间参考系统")]),v._v(" "),t("h3",{attrs:{id:"地理空间（geospatial）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#地理空间（geospatial）"}},[v._v("#")]),v._v(" 地理空间（Geospatial）")]),v._v(" "),t("ul",[t("li",[v._v("绝对空间：具有属性描述的空间位置的集合。它由一系列不同位置的空间坐标值组成")]),v._v(" "),t("li",[v._v("相对空间：据哟欧空间属性特征的实体店集合 。\n定义：地理空间定量化\n分类：")])]),v._v(" "),t("h3",{attrs:{id:"地理坐标系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#地理坐标系统"}},[v._v("#")]),v._v(" 地理坐标系统")]),v._v(" "),t("p",[t("strong",[v._v("地理坐标系：经纬度+高程")])]),v._v(" "),t("p",[t("strong",[v._v("由于地球本身不是规则的几何体，使用其自身作为参考对于测量不太友好")])]),v._v(" "),t("p",[v._v("解决方案：")]),v._v(" "),t("p",[v._v("不规则地表抽象数学模型化。不规则=>规则。")]),v._v(" "),t("p",[v._v("抽象数学模型化：")]),v._v(" "),t("blockquote",[t("p",[v._v("三级逼近：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("一级：大地水准面（重力等位面）")])]),v._v(" "),t("li",[t("p",[v._v("二级：地球椭球体（球心和地球质心重合）【地心坐标系】，全局优")])]),v._v(" "),t("li",[t("p",[v._v("三级：参考椭球体（非重合）【参心坐标系】，局部优")])])])]),v._v(" "),t("blockquote",[t("p",[v._v("三个面：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("地球表面")])]),v._v(" "),t("li",[t("p",[v._v("大地基准面")])]),v._v(" "),t("li",[t("p",[v._v("椭球面\n椭球体定义七参数：平移参数（3），旋转产生（3），比例系数（1）【重要，做坐标变换时需要】\n椭球体与基准面说一对多的关系。")]),v._v(" "),t("blockquote",[t("p",[v._v("参心坐标系，地心坐标系")])])])])]),v._v(" "),t("blockquote",[t("p",[v._v("经纬度定义：以参考椭球体上定义为标准")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("经度：标准线与夹角")])]),v._v(" "),t("li",[t("p",[v._v("纬度：过地面点对椭球法线与椭球赤道面对夹角")])]),v._v(" "),t("li",[t("p",[v._v("经纬度距离计算工具：Geogarphiclib")])])])]),v._v(" "),t("p",[v._v("垂直大地基准：")]),v._v(" "),t("ul",[t("li",[v._v("海拔：相对于大地水准面")]),v._v(" "),t("li",[v._v("大地高：海拔高+大地基准面")])]),v._v(" "),t("blockquote",[t("p",[v._v("注意：GPS测量的是大地高")])]),v._v(" "),t("p",[v._v("坐标系计算机表达：各种坐标系文件，以文本形式表达。例如shape格式内的.prj文件")]),v._v(" "),t("h3",{attrs:{id:"投影坐标系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#投影坐标系统"}},[v._v("#")]),v._v(" 投影坐标系统")]),v._v(" "),t("p",[v._v("三维的球体拍平到一个二维平面。")]),v._v(" "),t("p",[v._v("投影坐标系=地理坐标系+地图投影")]),v._v(" "),t("p",[v._v("地图投影方法可分为几何投影和数学解析法（非几何投影）。")]),v._v(" "),t("blockquote",[t("p",[v._v("数学解析法（非几何投影）常用于做全球尺度；例如MODIS数据的投影坐标系。")])]),v._v(" "),t("p",[v._v("几何投影是按几何原理绘制的投影变形；数学方法（非几何投影）是利用解析几何绘制的投影变形。")]),v._v(" "),t("p",[t("strong",[v._v("按投影面选择：")])]),v._v(" "),t("ul",[t("li",[v._v("圆柱")]),v._v(" "),t("li",[v._v("圆锥")]),v._v(" "),t("li",[v._v("方位")])]),v._v(" "),t("p",[t("strong",[v._v("按投影位置选择：")])]),v._v(" "),t("ul",[t("li",[v._v("相切")]),v._v(" "),t("li",[v._v("相割")])]),v._v(" "),t("p",[t("strong",[v._v("按投影面摆放选择：")])]),v._v(" "),t("ul",[t("li",[v._v("正轴")]),v._v(" "),t("li",[v._v("横轴")]),v._v(" "),t("li",[v._v("斜轴")])]),v._v(" "),t("p",[t("strong",[v._v("按投影性质选择：")])]),v._v(" "),t("ul",[t("li",[v._v("等角")]),v._v(" "),t("li",[v._v("等积")]),v._v(" "),t("li",[v._v("等距")]),v._v(" "),t("li",[v._v("任意")])]),v._v(" "),t("h3",{attrs:{id:"投影变形表示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#投影变形表示"}},[v._v("#")]),v._v(" "),t("strong",[v._v("投影变形表示")])]),v._v(" "),t("ul",[t("li",[v._v("长度变形表示：长度比"),t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",[t("semantics",[t("mrow",[t("mi",[v._v("μ")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[v._v("\\mu")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),t("span",{staticClass:"strut bottom",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),t("span",{staticClass:"base textstyle uncramped"},[t("span",{staticClass:"mord mathit"},[v._v("μ")])])])]),v._v("（地面上的微分线段经过投影后的长度与原有长度的比值)")]),v._v(" "),t("li",[v._v("面积变形表示：面积比P（地面上的微分面积经过投影后的长度与原有大小的比值）")]),v._v(" "),t("li",[v._v("角度变形表示：角度比（地面上的任意两条线的夹角α与经过投影后的角α′的差）")])]),v._v(" "),t("p",[v._v("【回顾了解公式推导】")]),v._v(" "),t("h3",{attrs:{id:"常用地图投影"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用地图投影"}},[v._v("#")]),v._v(" 常用地图投影")]),v._v(" "),t("p",[v._v("常用大比例尺地形图投影")]),v._v(" "),t("ul",[t("li",[v._v("墨卡托投影（85%）\n"),t("ul",[t("li",[v._v("横轴墨卡托投影（UTM，GAUSS）")]),v._v(" "),t("li",[v._v("WEB墨卡托投影")])])]),v._v(" "),t("li",[v._v("Lambert等角正割圆锥投影")]),v._v(" "),t("li",[v._v("Albers等积正割圆锥投影")]),v._v(" "),t("li",[v._v("等积伪圆柱投影")])]),v._v(" "),t("p",[v._v("用于两级地区1:100万地图")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("等角正切方位投影")]),v._v(" "),t("blockquote",[t("p",[v._v("变形说明：投影中央部分的长度和面积变形小，向外逐渐增大")])])])]),v._v(" "),t("p",[v._v("亚洲，欧洲，北美等大区域地区")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("等积斜切方位投影")]),v._v(" "),t("blockquote",[t("p",[v._v("中央经线上纬线自投影中心点向上向下逐渐减小；投影中心点向外，长度和角度变形逐渐增大。")])])])]),v._v(" "),t("p",[v._v("适用于东西方向长的地图")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("等距正割圆锥投影")]),v._v(" "),t("blockquote",[t("p",[v._v("在两标纬 之间角度、长度和面积变形为负，在两标纬外变形为正。 离开标纬愈远，变形的绝对值愈大。")])])])]),v._v(" "),t("p",[v._v("适用于东西南北近乎等大的地区，以及要求面积 正确的地图")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("等积正割圆锥投影")]),v._v(" "),t("blockquote",[t("p",[v._v("两标纬上无长度变形，在两标纬之间经线长度变形为正， 纬线长变形为负；在两标纬外经线长度变形为负， 纬线长度变形为正。角度变形在标纬附近很小，离 开标纬愈远，变形愈大。")])])])]),v._v(" "),t("p",[v._v("全球1:100万地形图的数学基础")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("等角正割圆锥投影")]),v._v(" "),t("blockquote",[t("p",[v._v("两标纬上无变形，在两标纬之间面积、长度变形为正，两标纬外变形为负，离 开标纬愈远，变形愈大。适用于要求方向正确的地图。")])])])]),v._v(" "),t("p",[v._v("航行地图")]),v._v(" "),t("ul",[t("li",[v._v("等角正切圆柱投影（墨卡托投影）")])]),v._v(" "),t("p",[v._v("全球自84°N-84°S之间地区的制图（常用）")]),v._v(" "),t("ul",[t("li",[v._v("等角横轴割圆柱投影（美国UTM投影）")]),v._v(" "),t("li",[v._v("等角横切椭圆柱投影（Gauss-Kruger）")])]),v._v(" "),t("blockquote",[t("p",[v._v("两者区别和联系？")])])])}),[],!1,null,null,null);_.default=a.exports}}]);