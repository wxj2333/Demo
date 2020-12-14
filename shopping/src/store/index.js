import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        origin: [
            {
                key: 0,
                id: 0,
                name: '真丝衬衫女设计感小众外穿百搭冷淡风高级感桑蚕丝缎面丝绸白衬衣',
                showprice: '￥99.00',
                price: 99.00,
                number: 1023,
                many: 1,
                money: 99.00,
                color: ['白色', '灰色', '蓝色'],
                onColor: '',
                picUrl: require('../assets/1 (1).jpg')
            },
            {
                key: 1,
                id: 1,
                name: '范思蓝恩白衬衫女设计感小众新款2020年七分袖职业装纯棉V领衬衣',
                showprice: '￥119.00',
                price: 119.00,
                number: 426,
                many: 1,
                money: 119.00,
                color: ['白色'],
                onColor: '',
                picUrl: require('../assets/2 (1).jpg')

            },
            {
                key: 2,
                id: 2,
                name: '2020秋季新款法式复古气质礼服长裙冷淡风V领显瘦小心机连衣裙女',
                showprice: '￥269.00',
                price: 269.00,
                number: 103,
                many: 1,
                money: 269.00,
                color: ['黑色'],
                onColor: '',
                picUrl: require('../assets/3 (1).jpg')

            },
            {
                key: 3,
                id: 3,
                name: '高腰垂感阔腿裤女2020夏季新款韩版坠感宽松小个子系带直筒裤子',
                showprice: '￥68.00',
                price: 68.00,
                number: 235,
                many: 1,
                money: 68.00,
                color: ['红色', '黑色'],
                onColor: '',
                picUrl: require('../assets/4 (1).jpg')
            },
            {
                key: 4,
                id: 4,
                name: 'ZENGLIU流苏耳环女气质温柔短款耳坠2020新款潮网红银针耳钉耳饰',
                showprice: '￥99.00',
                price: 99.00,
                number: 109,
                many: 1,
                money: 99.00,
                color: ['红色', '黑色'],
                onColor: '',
                picUrl: require('../assets/5 (1).jpg')
            },
            {
                key: 5,
                id: 5,
                name: '冷淡风圆圈耳环女扭曲纯银港风耳钉韩国气质百搭金属哑光耳饰耳圈',
                showprice: '￥68.00',
                price: 68.00,
                number: 123,
                many: 1,
                money: 68.00,
                color: ['金色', '银色'],
                onColor: '',
                picUrl: require('../assets/6 (1).jpg')
            },
            {
                key: 6,
                id: 6,
                name: 'ZENGLIU设计感云深不知处耳钉女小众网红仙鹤耳环中国风银针耳饰',
                showprice: '￥118.88',
                price: 118.88,
                number: 523,
                many: 1,
                money: 118.88,
                color: ['仙鹤款'],
                onColor: '',
                picUrl: require('../assets/7 (1).jpg')

            },
            {
                key: 7,
                id: 7,
                name: 'ZENGLIU链条耳钉女韩国气质复古耳环2020年新款潮冷淡风小众耳饰',
                showprice: '￥109.00',
                price: 109.99,
                number: 938,
                many: 1,
                money: 109.00,
                color: ['银色'],
                onColor: '',
                picUrl: require('../assets/8 (1).jpg')

            },
            {
                key: 8,
                id: 8,
                name: '毛衣链女欧美短款百搭锁骨链韩国简约吊坠装饰品工装时装项链配饰',
                showprice: '￥69.99',
                price: 69.99,
                number: 192,
                many: 1,
                money: 69.99,
                color: ['金色'],
                onColor: '',
                picUrl: require('../assets/9 (1).jpg')

            },
            {
                key: 9,
                id: 9,
                name: 'ZENGLIU复古漫画风链条手链女ins小众设计冷淡风韩版潮网红手饰品',
                showprice: '￥119.00',
                price: 119.00,
                number: 323,
                many: 1,
                money: 119.00,
                color: ['银色'],
                onColor: '',
                picUrl: require('../assets/10 (1).jpg')

            },
            {
                key: 10,
                id: 10,
                name: '星星项链女小众设计感2020年新款潮简约气质锁骨链钛钢玫瑰金饰品',
                showprice: '￥89.00',
                price: 89.00,
                number: 130,
                many: 1,
                money: 89.00,
                color: ['金色'],
                onColor: '',
                picUrl: require('../assets/11 (1).jpg')
            },
            {
                key: 11,
                id: 11,
                name: '2020新款气质颈链女短款锁骨链项圈项链潮网红choker脖子饰品颈带',
                showprice: '￥129.00',
                price: 129.00,
                number: 334,
                many: 1,
                money: 129.00,
                color: ['银色'],
                onColor: '',
                picUrl: require('../assets/12 (1).jpg')
            }],
        // 想要结算的商品条目
        car: [],
        selectedRowKeys: [],
        // 历史订单
        buy: [],
        searchers: [],
        c: 1
        // name1: '真丝衬衫女设计感小众外穿百搭冷淡风高级感桑蚕丝缎面丝绸白衬衣',
        // name2: '范思蓝恩白衬衫女设计感小众新款2020年七分袖职业装纯棉V领衬衣',
        // name3: '2020秋季新款法式复古气质礼服长裙冷淡风V领显瘦小心机连衣裙女',
        // name4: '高腰垂感阔腿裤女2020夏季新款韩版坠感宽松小个子系带显瘦直筒裤',
        // name5: 'ZENGLIU流苏耳环女气质温柔短款耳坠2020新款潮网红银针耳钉耳饰',
        // name6: '冷淡风圆圈耳环女扭曲纯银港风耳钉韩国气质百搭金属哑光耳饰耳圈',
        // name7: 'ZENGLIU设计感云深不知处耳钉女小众网红仙鹤耳环中国风银针耳饰',
        // name8: 'ZENGLIU链条耳钉女韩国气质复古耳环2020年新款潮冷淡风小众耳饰',
        // name9: '毛衣链女欧美短款百搭锁骨链韩国简约吊坠装饰品工装时装项链配饰',
        // name10: 'ZENGLIU复古漫画风链条手链女ins小众设计冷淡风韩版潮网红手饰品',
        // name11: '星星项链女小众设计感2020年新款潮简约气质锁骨链钛钢玫瑰金饰品',
        // name12: '2020新款气质颈链女短款锁骨链项圈项链潮网红choker脖子饰品颈带',
        // price1: '￥99.00',
        // price2: '￥119.00',
        // price3: '￥269.00',
        // price4: '￥68.00',
        // price5: '￥99.99',
        // price6: '￥68.00',
        // price7: '￥118.88',
        // price8: '￥109.00',
        // price9: '￥69.99',
        // price10: '￥119.00',
        // price11: '￥89.00',
        // price12: '￥129.00'
    },
    mutations: {
        // 加入购物车时，先判断购物车是否有此物品，然后根据id加入商品进car，并且重写many，加入onColor
        carAdd(state, newobj) {
            debugger
            console.log(state.car);
            console.log(1);
            console.log(newobj);
            let hasObj = {};
            if (state.car.length) {
                hasObj = state.car.filter(obj => obj.id === newobj.id);
                // debugger
            }
            let x;
            console.log(hasObj);
                // 判断是否购物车里有同一商品
            if (Object.keys(hasObj).length) {
                let a = 0;
                let y = 0;
                for (let i = 0; i < hasObj.length; i++){
                a = a || Number(hasObj[i].onColor === hasObj[i].color[newobj.onColor])
                if (a){
                    y = i;
                }
                }
                if (a){
                // debugger
                x = state.car.indexOf(hasObj[y]);
                // debugger
                state.car[x].many += newobj.many;
                // debugger
                state.car[x].money = state.car[x].many * hasObj[y].price
                // debugger
                state.car[x].money = parseFloat(state.car[x].money).toFixed(2)
                // debugger
                console.log(state.car[x].many);
                } else {
                    let addarr = {};
                    console.log(state.car);
                    // debugger
                    addarr = { ...state.origin[newobj.id] };// 直接等于只是引用了地址
                    if (Object.keys(hasObj).length){
                        addarr.key = addarr.key + (20 * state.c);
                        state.c++;
                    }
                    console.log(state.car);
                    console.log(addarr);
                    console.log(state.car);
                    console.log(newobj.many);
                    // debugger
                    addarr.many = newobj.many;
                    // 看看总价能不能自动改
                    // debugger
                    addarr.money *= addarr.many;
                    addarr.money = addarr.money.toFixed(2)
                    console.log(addarr.many);
                    // 重写color属性
                    // debugger
                    addarr.onColor = addarr.color[newobj.onColor];
                    console.log(addarr);
                    console.log(state.car);
                    // debugger
                    state.car.push(addarr);
                    console.log(state.car);
                }
            } else { // 如无同一商品，则往 car 数据里添加新对象 
                debugger
                
                let addarr = {};
                console.log(state.car);
                debugger
                addarr = { ...state.origin[newobj.id] };// 直接等于只是引用了地址
                if (Object.keys(hasObj).length){
                    addarr.key = addarr.key + (20 * state.c);
                    state.c++;
                }
                console.log(state.car);
                console.log(addarr);
                console.log(state.car);
                console.log(newobj.many);
                // debugger
                addarr.many = newobj.many;
                // 看看总价能不能自动改
                // debugger
                addarr.money *= addarr.many;
                addarr.money = addarr.money.toFixed(2)
                console.log(addarr.many);
                // 重写color属性
                // debugger
                addarr.onColor = addarr.color[newobj.onColor];
                console.log(addarr);
                console.log(state.car);
                // debugger
                state.car.push(addarr);
                console.log(state.car);
            }
        },
        // 立即购买时，id商品number加一
        numberAdd(state, obj) {
            console.log(state.origin[obj.id].number);
            state.origin[obj.id].number += obj.many;
        },
        selectDelete(state) {
            state.car = state.car.filter(obj => state.selectedRowKeys.indexOf(obj.key) === -1);
            state.selectedRowKeys = [];
        },
        carDelete(state, key) {
            // const dataSource = [...this.dataSource];
            state.car = state.car.filter(item => item.key !== key);
        },
        changeMany(state, obj) {
            // const dataSource = [...this.dataSource];
            const y = state.car.indexOf(obj);
            state.car[y].many = obj.many;
            state.car[y].money = state.car[y].many * state.car[y].price;
            state.car[y].money = state.car[y].money.toFixed(2)
        },
        // 在购物车购买时，将购买物品放进历史订单中，并且购买商品数量加一
        buy(state) {
            // const newarr = state.car.filter(obj => state.selectedRowKeys.indexOf(obj.key) !== -1);
            // newarr.forEach(obj => {
            //     state.buy.push(newarr[obj]);      
            // });
            const selects = state.selectedRowKeys;
            debugger
            for (let i = 0; i < state.car.length; i++) {
                // 要从car里导入其颜色，数量数据，所以不可从原始数据中导入
                if (selects.indexOf(state.car[i].key) !== -1) {
                    debugger
                    state.buy.push(state.car[i]);
                    debugger
                    console.log(state.car)
                    debugger
                }
            }
            state.car = state.car.filter(obj => state.selectedRowKeys.indexOf(obj.key) === -1);
            state.selectedRowKeys = [];
            // state.car.splice(i, selects.length);
            // state.selectedRowKeys = [];
        },
        // 立即购买时，根据id加入商品进buy，并且重写many，加入onColor
        buyNow(state, obj) {
            const newobj = state.origin[obj.id];
            newobj.many = obj.many;
            newobj.onColor = newobj.color[obj.color];
            state.buy.push(newobj);
        },
        query(state, key) {
                console.log(state.searchers);
                state.searchers = state.origin.filter(item => item.name.includes(key));
                console.log(state.searchers);
        },
        numberAdds(state) {
            for (let j = 0; j < state.buy.length; j++) {
                console.log(state.origin[state.buy[j].id].number);
                console.log(state.buy[j].many);
                state.origin[state.buy[j].id].number += state.buy[j].many
            }
        }
    },
    getters: {
        // 数组里是已选的条目,选择时显示的总金额,选择结算时也是直接已选乘金额，所以可以直接用这个函数
        allmoney: state => {
            let allmoney = 0;
            const newarr = state.car.filter(obj => state.selectedRowKeys.indexOf(obj.key) !== -1);
            newarr.forEach(obj => {
                allmoney += Number(obj.money);
            });
            console.log(allmoney);
            return allmoney;
        },
        much: state => {
            state.origin.forEach(obj => {
                obj.money = obj.many * obj.price;
                obj.money = obj.money.toFixed(2)
            });
            state.car.forEach(obj => {
                obj.money = obj.many * obj.price;
                obj.money = obj.money.toFixed(2)
            });
        }
        // getSeacher: state => {
        //     return state.searchers;
        // }
        // // 购买时需要付的金额
        // buymoney(state,arr) {
        //     let buymoney = 0;
        //     let newarr = state.car.filter(item => arr.indexOf(item.id) !== id);
        //     newarr.forEach(item => {
        //         buymoney += item.price * item.many
        //     });
        //     return buymoney;
        // }
    }
})
