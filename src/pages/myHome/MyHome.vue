<template>
    <div class="home">
        <div class="content">
            <!-- 头部 -->
            <div class="header">
                <div class="text">外卖</div>
                <div class="location">
                    <van-icon name="location" />
                    <span>e通世界园</span>
                    <van-icon name="arrow" />
                </div>
            </div>
            <!-- 主要内容 -->
            <div class="main">
                <div class="main_bg">
                    <div class="search">
                        <input type="text" />
                        <div class="search_text">搜索</div>
                    </div>
                    <div class="classify">
                        <div class="big_classify"></div>
                        <div class="small_classify"></div>
                    </div>
                </div>
                <div class="tabs"></div>

            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from "../../components/Footer.vue";
export default {
    name: '',
    components: {
        Footer
    },
    data() {
        return {

        };
    }
}
</script>

<style scoped lang="less">
.home {
    display: flex;
    flex-flow: column;
    height: 100%;

    .content {
        flex: 1;
        overflow-y: auto;

        .header {
            background-image: linear-gradient(#ffc400, #fff);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 20px 40px 20px;

            .text {
                font-style: 40px;
                font-weight: 600;
            }

            .location {
                span {
                    margin: 0 5px;
                }

                font-size: 14px;
            }
        }

        .main {
            margin-top: -30px;

            .main_bg {
                background-image: linear-gradient(#fff #f5f5f5);
                padding: 10px 20px 0 20px;
                border-radius: 30px 30px 0 0;
                position: relative;

                .search {
                    .search_text {
                        position: absolute;
                        background-color: #ffc400;
                        right: -6px;
                        top: 1px;
                        width: 50px;
                        height: 32px;
                        border-radius: 16px;
                        text-align: center;
                        line-height: 32px;
                        font-size: 14px;
                    }

                }
                input{
                    width: 100%;
                    border: 1px soild #ffc400;
                }


            }

        }
    }
}
</style>