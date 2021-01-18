<!--
Description
@authors Your Name (you@example.org)
@date    2021-01-17 22:19:42
@version 1.0.0
-->
<template>
    <div>
        <div class="score-setting">
            <template v-if="loginTag">
                <div class="info">
                    <img
                        src="https://pic.mdcdn.cn/h5/img/score_expand/score.png"
                    />
                    当前积分<span class="value">{{
                        userinfo.showVipScore
                    }}</span
                    >分
                </div>
                <div class="btn-row">
                    <div class="left">
                        <p class="121" :value="212">投入1312313</p>
                        <p>积分</p>
                    </div>
                    <div class="input-wrapper">
                        <i
                            v-show="activeInput && btns.showMinusBtn"
                            class="iconfont icon-jianhao minus"
                            @click="minusScore"
                        ></i>
                        <input
                            v-model="costScore"
                            :class="activeInput ? 'actived' : 'normal'"
                            maxlength="6"
                            type="text"
                            autocomplete="off"
                            @focus="handleFocus"
                            @blur="handleBlur"
                            @input="handleInput"
                            :placeholder="
                                activeInput
                                    ? ''
                                    : `输入${activityInfo.score_min}-${activityInfo.score_max}间整数`
                            "
                        />
                        <i
                            v-show="activeInput && btns.showAddBtn"
                            class="iconfont icon-jiahao add"
                            @click="addScore"
                        ></i>
                    </div>
                </div>
                <div class="link-row" v-if="showCard.id">
                    <img
                        class="tip-icon"
                        src="https://pic.mdcdn.cn/h5/img/score_expand/unchecked_tip.png"
                        alt=""
                    />
                    <div class="link" @click="showChooseCardPopup">
                        <span class="text">{{ showCard.ratio }}倍膨胀卡 ></span>
                    </div>
                    <div class="btn" @click="checkCard">
                        <img
                            v-if="!selectedCardId"
                            src="https://pic.mdcdn.cn/h5/img/score_expand/unchecked.png"
                        />
                        <img
                            v-else
                            src="https://pic.mdcdn.cn/h5/img/score_expand/checked.png"
                            alt=""
                        />
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            a: "1",
            b: "1",
        };
    },
};
</script>

<style lang="css" scoped>
</style>
