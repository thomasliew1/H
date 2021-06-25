import React from 'react'
import './ArtShow.scss'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css"

import HotArea from '../../components/HotArea/HotArea'

import bg from '../../assets/images/all-zip.jpg'
import menuIcon from '../../assets/images/menu.png'



class ArtShow extends React.Component{
    constructor(props) {
        super(props);

        var tickets;

        var matchs = [
            "郭主席.jpg",
            "陈进忠.jpg",
            "李文华.jpg"
        ]
        tickets = (matchs).map(item => require("../../assets/images/领导/" + item));


        var matchs1 = [
            "刘伟+红色传承+机关工会.jpg",
            "黄振作+东方欲晓+泉州分行.jpg",
            "邢彗环+我与祖国同心，我与祖国同梦+哈尔滨分行.jpg"
        ]
        tickets = tickets.concat((matchs1).map(item => require("../../assets/images/书法获奖作品/一等奖/" + item)));

        var matchs2 = [
            "王颖+七言对联+北京分行.jpg",
            "金小伟+《录毛泽东诗》+厦门分行.jpg",
            "沈乐权+《浪淘沙·北戴河》+厦门分行.jpg",
            "陈帅+《滕王阁序》+长沙分行.jpg",
            "郑欣瑶 +《毛泽东诗词四首》+石家庄分行.jpg",
            "张静静+篆书诗词+科技公司.jpg"
        ]
        tickets = tickets.concat((matchs2).map(item => require("../../assets/images/书法获奖作品/二等奖/" + item)));

        var matchs3 = [
            "刘剑坛+《沁园春-长沙》+福州分行.jpg",
            "张滢+《登庐山》+厦门分行.jpg",
            "李智+南中谪居五咏+武汉分行.jpg",
            "廖金生+《七律·人民解放军占领南京》+长沙分行.jpg",
            "陈晓宝+论爱国主义+西安分行.jpg",
            "李秀茹+心有所信，不忘初心语句+广州分行.jpg",
            "郝文君+毛泽东诗词《长征》+石家庄分行.jpg",
            "李桓栋+《定风波》+厦门分行.jpg",
            "张的勇+横幅，毛泽东词清平乐六盘山+机关工会.jpg",
            "鲍婧+沁园春长沙+南京分行.jpg"
        ]
        tickets = tickets.concat((matchs3).map(item => require("../../assets/images/书法获奖作品/三等奖/" + item)));



        var matchs4 = [
            "黎映桃+满江红+机关工会网络金融部.jpg",
            "刘铎+龙门对：《民生不惧改革艰》+机关工会.jpg",
            "朱虹+建党伟业+北京分行.jpg",
            "程碧晖+《七律·长征》+太原分行.jpg",
            "韩婧+《忆往昔·看今朝》+太原分行.jpg",
            "娄丹+《民安国泰逢疆世 社稷百丰颂党歌》+杭州分行.jpg",
            "殷雯+长征 +南京分行.jpg",
            "陈晓宝+中华民族精神+西安分行.jpg",
            "郝文君+毛泽东诗词《咏蛙》+石家庄分行.jpg",
            "卢翔宇+《诗二首》+石家庄分行.jpg",
            "傅丽萍+《沁园春·雪》+厦门分行.jpg",
            "贾硕+卜算子·咏梅+郑州分行.jpg",
            "刘雁如+橘子洲头 、沁园春·雪+郑州分行.jpg",
            "关晓雯+浪淘沙·北戴河+郑州分行.jpg",
            "廖金生+初心得现赐予盛世季 励志百年创出新时代+长沙分行.jpg",
            "安百山+毛泽东词 卜算子-咏梅+金融租赁.jpg",
            "黄挺+是王禹偁的黄冈竹楼记+金融租赁.jpg",
            "张晨星+七律·人民解放军占领南京+科技公司.jpg",
            "贾佳+《初心铸就伟业，使命引领征程》+科技公司.jpg",
            "李东+隶书对联+科技公司.jpg"
        ]
        tickets = tickets.concat((matchs4).map(item => require("../../assets/images/书法获奖作品/优秀奖/" + item)));


        var matchs5 = [
            "6《记录老乡的幸福生活》、《民生希望小学》、《青年为民生家园公益林青苗挂牌》王飞-个人金融部18636159100民生希望小学.jpg",
            "《鸟笼工艺》 冷雪 成都分行高新支行13540848838.jpg",
            "2-1.凝心聚力-陈琳-办公室-企业宣传岗-15759875915.jpg"
        ]
        tickets = tickets.concat((matchs5).map(item => require("../../assets/images/摄影获奖作品/一等奖/" + item)));


        var matchs6 = [
            "20.客服党员我先行-毛妍-成都客服13228161007.jpg",
            "4《送金融知识进乡村》、《冬日真情送爱心》马跃-太钢支行13935113418送金融知识进乡村2.jpg",
            "新西藏-幸福-胡向阳-大连分行-13940880901.jpg",
            "《播撒希望的种子》沈磊（嘉兴分行）17705830181.jpg",
            "1防护你我共抗疫情-韩雪.jpg",
            "1防护你我共抗疫情-韩雪.jpg"
        ]
        tickets = tickets.concat((matchs6).map(item => require("../../assets/images/摄影获奖作品/二等奖/" + item)));


        var matchs7 = [
            "9.巨人苏醒、平地崛起+王兴华+(成都）后台运营中心电商理财部+18111610273.jpg",
            "儿子的中国梦  杨若尘 上海分行金融同业部 15921596606.jpg",
            "《庆丰收04》张丽（杭州分行）13600526996.jpg",
            "丹心向党—常州支行李莺.JPG",
            "扶贫攻坚民生人之梁岔村1+西安分行+邓飞岳+13720416560.jpg",
            "1-3.谁与争锋-蔡文强-泉州分行资产保全部-保全经理-13559533999.jpg",
            "3“长青银行 百年民生”-王陆.jpg",
            "民生运动会之腾跃-杨建学-西安分行-13572508011.JPG",
            "为胜利喝彩——民生银行篮球赛总决赛（民生银行厦门分行唐敏15805927794）.JPG",
            "摄影-1《建党百年看中国，清洁能源造未来》杭宸宇郑州南阳路支行公司客户经理18037378765.jpg"
        ]
        tickets = tickets.concat((matchs7).map(item => require("../../assets/images/摄影获奖作品/三等奖/" + item)));


        var matchs8 = [
            "童行100-—李文婷—交易银行部—联系电话56367518.jpg",
            "私人银行陈睿 (1).jpg",
            "23.《春回大地》-黄芸-华东分中心上海一部-18616757211.jpg",
            "23号 致敬安保卫士系1-程蔚-北京分行CBD管理总部-13466650405.jpg",
            "发现美丽瞬间-支行厅堂的日常3.JPG",
            "7《大家富强 小家幸福》乔汪砚-私人银行部18734890052守护小家爱大家.jpg",
            "镇江支行 胡晓婷《一往情深》.jpg",
            "镇江支行 倪戴坤《传承与希望》.jpg",
            "勇往直前——民生银行沙滩运动会（民生银行厦门分行唐敏15805927794）.JPG",
            "摄影-25《庆祝建党100周年》何山郑州花园路支行零售客户经理18137771519.JPG",
            "摄影-9《党史教育》刘扬郑州航海路支行厅堂主管13253538969.jpg",
            "31闪闪小红星（曾德友）.jpg",
            "《每个人都了不起》易佳乐 长沙分行湘府路支行 18569061993.jpg",
            "《老党员风采》 覃馨仪 长沙分行常德二级分行 13875038669 .jpg",
            "情系农民工之代发现场（5）-李尤-中国民生银行遵义分行-18984954611.jpg",
            "1.齐心合力，抒写民生（银川分行田世福、成功）组照2.jpg",
            "2.爱心驿站（银川分行王敏）.jpg",
            "银行厅堂人的一天 民生银行海口分行办公室 姚少龙 15008035648帮助客户开立银行卡.JPG",
            "13《前人伟业 后人传唱》李志豪民生置业有限公司13816390163.jpg",
            "庆国庆、赛龙舟-改革转型当先锋-孙梅-数据业务研发-18310091527.jpg"
        ]
        tickets = tickets.concat((matchs8).map(item => require("../../assets/images/摄影获奖作品/优秀奖/" + item)));



        console.log(tickets);

        //批量引入
        // const requireContext = require.context("../../assets/images/摄影获奖作品/", true, /^\.\/.*\.jpg$/);
        // const images = requireContext.keys().map(requireContext);
        // console.log(images);

        this.state = {
            tickets: tickets,
            direction: `vertical`,
            imgUrl: null,
            x: null,
            y: null,
            w: null,
            h: null,
            index: 0,
            css: [],
            isShowMenu: false

        }

        this.showPic = this.showPic.bind(this);
        this.hidePic = this.hidePic.bind(this);
        this.console = this.console.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.showMenu = this.showMenu.bind(this)
        this.hideMenu = this.hideMenu.bind(this)
        // this.jump = this.jump.bind(this)


    }

    showPic(e){
        this.setState({
            imgUrl: this.state.tickets[e].default
        })
    }
    hidePic(){
        this.setState({
            imgUrl: null
        })
    }
    console(e){
        e.stopPropagation()
        this.hideMenu()
        if(this.state.x && this.state.y){
            //存在x y
            let x = this.state.x;
            let y = this.state.y;
            let _x = e.nativeEvent.offsetX;
            let _y = e.nativeEvent.offsetY;
            let w = _x - x;
            let h = _y - y;
            this.setState({
                w,h,
                index:this.state.index+1
            },()=>{
                // console.log(this.state.x, this.state.y)
                // console.log(this.state.w, this.state.h)
                let css = `
                    .hot-${this.state.index-1}{
                        width: ${w}px;
                        height: ${h}px;
                        left: ${x}px;
                        top: ${y}px;
                        position: absolute;
                    }
                `.replace(/\s*/g,'')+
`
`


                this.setState({
                    x: null,
                    y: null,
                    w: null,
                    h: null,
                    css: this.state.css + `` + css
                },()=>{
                    // console.log(this.state.x, this.state.y)
                    // console.log(this.state.w, this.state.h)
                    // console.log( this.state.css )
                })

            })

        }else{
            console.log(e)
            //不存在x y
            let _x = e.nativeEvent.offsetX;
            let _y = e.nativeEvent.offsetY;
            this.setState({
                x:_x,
                y:_y
            },function () {
                // console.log(this.state.x, this.state.y)
                // console.log(this.state.w, this.state.h)
            })

        }

    }
    toggleMenu(e){
        this.setState({
            isShowMenu: !this.state.isShowMenu
        })
    }
    showMenu(e){
        e.stopPropagation()
        this.setState({
            isShowMenu: true
        })
    }
    hideMenu(e){
        this.setState({
            isShowMenu: false
        })
    }
    jump = (e, p) => {
        e.stopPropagation();
        console.log(p)
        if( p == 1 ){
            let anchorElement = document.getElementById(`hot-0`);
            if(anchorElement) {
                anchorElement.scrollIntoView(
                    {behavior: 'smooth'}
                );
            }
        }else if( p == 2 ){
            let anchorElement = document.getElementById(`hot-2`);
            if(anchorElement) {
                anchorElement.scrollIntoView(
                    {behavior: 'smooth'}
                );
            }
        }else if( p == 3 ){
            let anchorElement = document.getElementById(`hot-7`);
            if(anchorElement) {
                anchorElement.scrollIntoView(
                    {behavior: 'smooth'}
                );
            }
            // document.getElementById('art-show').scrollLeft = 738;
        }else if( p == 4 ){
            let anchorElement = document.getElementById(`hot-9`);
            if(anchorElement) {
                anchorElement.scrollIntoView(
                    {behavior: 'smooth'}
                );
            }
        }else if( p == 5 ){
            let anchorElement = document.getElementById(`hot-14`);
            if(anchorElement) {
                anchorElement.scrollIntoView(
                    {behavior: 'smooth'}
                );
            }
        }else if( p == 6 ){
            let anchorElement = document.getElementById(`hot-25`);
            if(anchorElement) {
                anchorElement.scrollIntoView(
                    {behavior: 'smooth'}
                );
            }
        }else if( p == 7 ){
            let anchorElement = document.getElementById(`hot-42`);
            if(anchorElement) {
                anchorElement.scrollIntoView(
                    {behavior: 'smooth'}
                );
            }
        }else if( p == 8 ){
            let anchorElement = document.getElementById(`hot-48`);
            if(anchorElement) {
                anchorElement.scrollIntoView(
                    {behavior: 'smooth'}
                );
            }
        }else if( p == 9 ){
            let anchorElement = document.getElementById(`hot-52`);
            if(anchorElement) {
                anchorElement.scrollIntoView(
                    {behavior: 'smooth'}
                );
            }
        }else if( p == 10 ){
            let anchorElement = document.getElementById(`hot-57`);
            if(anchorElement) {
                anchorElement.scrollIntoView(
                    {behavior: 'smooth'}
                );
            }
        }else if( p == 11 ){
            let anchorElement = document.getElementById(`hot-67`);
            if(anchorElement) {
                anchorElement.scrollIntoView(
                    {behavior: 'smooth'}
                );
            }
        }else if( p == 12 ){
            document.getElementById('art-show').scrollLeft = 600;
        }
    }

    componentDidMount(){

    }

    componentDidUpdate() {

    }


    render() {
        return <div className={'art-show'} id="art-show" onClick={this.console}>
            <img ref={this.imgRef} className='bg-img' src={bg} alt=""/>
            {
                this.state.tickets.map((item,index)=>{
                    return (
                        <div key={index} id={`hot-${index}`} className={`hot hot-${index}`} onClick={()=>{this.showPic(index)}}></div>
                    )
                })
            }
            {
                this.state.imgUrl?(
                    <img src={this.state.imgUrl} alt="" className="pop-img-zp" onClick={this.hidePic}/>
                ):null

            }
            {
                this.state.isShowMenu?(
                    <div className="menu">
                        <div className="menu-i" onClick={e=>this.jump(e,1)} >
                            领导作品
                        </div>
                        <div className="menu-i">
                            <div onClick={e=>this.jump(e,2)} >书法作品</div>
                            <div className="menu-son">
                                <div className="menu-son-i" onClick={e=>this.jump(e,3)} >
                                    一等奖
                                </div>
                                <div className="menu-son-i" onClick={e=>this.jump(e,4)} >
                                    二等奖
                                </div>
                                <div className="menu-son-i" onClick={e=>this.jump(e,5)} >
                                    三等奖
                                </div>
                                <div className="menu-son-i" onClick={e=>this.jump(e,6)} >
                                    优秀奖
                                </div>
                            </div>
                        </div>
                        <div className="menu-i">
                            <div onClick={e=>this.jump(e,7)} >摄影作品</div>
                            <div className="menu-son">
                                <div className="menu-son-i" onClick={e=>this.jump(e,8)} >
                                    一等奖
                                </div>
                                <div className="menu-son-i" onClick={e=>this.jump(e,9)} >
                                    二等奖
                                </div>
                                <div className="menu-son-i" onClick={e=>this.jump(e,10)} >
                                    三等奖
                                </div>
                                <div className="menu-son-i" onClick={e=>this.jump(e,11)} >
                                    优秀奖
                                </div>
                            </div>
                        </div>
                        <div className="menu-i" onClick={e=>this.jump(e,12)} >
                            党史素描画
                        </div>

                    </div>
                ):(
                    <div onClick={this.showMenu}  className="menu-icon">
                        <img src={menuIcon} alt=""/>
                    </div>
                )
            }


        </div>
    }

}

export default ArtShow;