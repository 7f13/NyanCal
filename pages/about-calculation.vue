<template>
  <div class="container">
    <div class="page-content-container">
      <h1>計算式について</h1>
      <hr style="margin-bottom: 5vh;" />
      <section>
        <h2>はじめに</h2>
        <p>
          ここでは、このアプリ内にて、カロリーや食事量を計算するために使用した式について、ご説明いたします。丁寧に事前調査を行った上で、アプリ内で計算式を使用させていただいておりますが、万が一不備や矛盾等にお気づきになった場合は、恐れ入りますが運営者までお知らせいただけますようお願いいたします。
        </p>
      </section>
      <section id="calorie-1day">
        <h2>1日に必要なカロリーの計算</h2>
        <p>
          まず、猫にとって1日に必要なカロリーを求めるために、<strong
            >安静時エネルギー要求量(Resting energy requirement:RER)</strong
          >を求めます。<br />
          計算式は、以下です。
        </p>
        <div style="margin: 1rem 0;">
          <span
            ><b
              >安静時エネルギー必要量（ＲＥＲ）＝７０×（体重ｋｇ）の0.75乗</b
            ></span
          >
        </div>
        <p>
          例えば、猫の体重が5.0kgの場合で考えてみます。0.75=3/4(4分の3)ですので、5.0の0.75乗は、5.0の3/4乗。つまり(5.0
          ×5.0
          ×5.0)の二重根号(√√)で求めることができます。したがって、安静時エネルギー必要量（ＲＥＲ）は、
        </p>
        <div style="margin: 1rem 0;">
          <span>
            安静時エネルギー必要量（ＲＥＲ）＝７０×（5.0 × 5.0 × 5.0）の0.75乗
            =234 Kcal/日
          </span>
        </div>
        となります。
      </section>
      <section>
        <h2>個体差を考慮する</h2>
        <p>
          上記で求めた数字から、さらに各個体差を考慮し、最終的に1日に必要なエネルギー量を求めていきます。
        </p>
        <p>
          考慮する観点は、以下の2つです。
        </p>
        <ul style="margin: 1rem 0;">
          <li>猫の現在の体型</li>
          <li>猫のライフステージ</li>
        </ul>
        <div id="notice" class="notice">
          <h3 style="font-size: 14px; color: rgb(79, 79, 79);">
            <font-awesome-icon
              icon="info-circle"
              class="fa-fw"
              style="font-size: 14px; color: rgb(254, 194, 18);"
            />本アプリの仕様について
          </h3>
          <p style="font-size: 12px; color: rgb(74, 74, 74);">
            本アプリは、簡易バージョンと詳細バージョンの2種類を用意しております。簡易バージョンでは、お気軽に使用していただけるように、尋ねることや選択肢の数を制限し、答える際になるべく迷わないよう設計しました。その結果として、シンプルに使用していただけるようになった反面、算出の際に猫のライフステージまでを考慮出来ておりません。より正確な算出結果をお求めの方は、詳細バージョンを使用していただくか、または獣医さんへお尋ねいただけるようお願い致します。
          </p>
        </div>
      </section>
      <section>
        <h2>体型から適正体重を求める</h2>
        <p>
          基本的に、1日に必要なカロリーを求める際には、猫の現在の体重と各ライフステージを考慮するのですが、そうして算出された値は猫の適正体重時での必要カロリーです。猫が太りすぎていたり痩せすぎているなど、適正体重とかけ離れている場合、適正体重の方を基準に必要カロリーを算出しなければ、餌をあげすぎたり、あげなすぎたりすることになります。
        </p>
        <br />
        <p>
          猫の適正体重を知るために、<strong>ボディコンディションスコア(BCS)</strong>という指標があります。
        </p>
        <div class="bcs-image-container">
          <img
            src="~/assets/body-condition-score.png"
            alt="ボディコンディションスコアの表"
          />
          <div class="bcs-image-link-origin">
            <span>参考: </span
            ><a href=""
              >飼い主のためのペットフード・ガイドライン〜犬・猫の健康を守るために〜環境省</a
            >
          </div>
        </div>
        <p>
          本アプリではこのスコアを基に適正体重を算出しています。具体的な算出方法は以下の表に記載しました。
        </p>
        <table style="width: 100%; text-align: center; margin: 2rem 0;">
          <tr>
            <th>BCS</th>
            <th>計算式</th>
          </tr>
          <tr>
            <td>1(痩せ)</td>
            <td>体重 × 1.2</td>
          </tr>
          <tr>
            <td>2(やや痩せ)</td>
            <td>体重 × 1.1</td>
          </tr>
          <tr>
            <td>3(理想的)</td>
            <td>体重 × 1.0</td>
          </tr>
          <tr>
            <td>4(やや肥満)</td>
            <td>体重 ÷ 1.15</td>
          </tr>
          <tr>
            <td>2(やや痩せ)</td>
            <td>体重 ÷ 1.3</td>
          </tr>
        </table>
        <p>
          「痩せ気味」や「太り気味」といった選択肢が各BCSと紐づいており、最初に適正体重を計算したあとでカロリー量を算出しています。
        </p>
      </section>
      <section>
        <h2>
          ライフステージを考慮して必要なカロリー量を求める
        </h2>
        <p>
          最後に、猫のライフステージを考慮し、<strong>
            1日に必要なエネルギー要求量(Daily Energy Requirement:DER)</strong
          >を求めます。<br />
          計算には上記で計算したRERを使用します。
        </p>
        <div style="margin: 1rem 0;">
          <span
            ><b
              >1日に必要なエネルギー要求量（DＥＲ）＝RER × ライフステージ係数</b
            ></span
          >
        </div>
        <p>
          また、各ライフステージとその係数については、以下の表をご参照ください。
        </p>
        <table style="width: 100%; margin: 2rem 0;">
          <tr>
            <th>ライフステージ</th>
            <th>係数</th>
          </tr>
          <tr>
            <td>生後4ヶ月未満</td>
            <td>3.0</td>
          </tr>
          <tr>
            <td>生後4~6ヶ月</td>
            <td>2.5</td>
          </tr>
          <tr>
            <td>生後7~12ヶ月</td>
            <td>2.0</td>
          </tr>
          <tr>
            <td>去勢・避妊してない成猫</td>
            <td>1.4</td>
          </tr>
          <tr>
            <td>去勢・避妊済みの成猫</td>
            <td>1.2</td>
          </tr>
          <tr>
            <td>高齢(7歳~)</td>
            <td>1.1</td>
          </tr>
          <tr>
            <td>妊娠中</td>
            <td>2.0</td>
          </tr>
          <tr>
            <td>授乳中</td>
            <td>自由採食(2.0~6.0)</td>
          </tr>
        </table>
        <p>
          例えばRERが234kcalで去勢・避妊済みの成猫の場合、
        </p>
        <div style="margin: 1rem 0;">
          <span>
            1日に必要なエネルギー要求量（DER）＝234 × 1.2 = 280kcal
          </span>
        </div>
        <p>となります。</p>
      </section>
      <section>
        <h2>さいごに</h2>
        <p>
          本アプリにて算出した値は、病歴や飼育環境までを考慮できておらず、完全に正確な値とは言い切れません。あくまでも日頃の簡易的な判断で参考にする程度で留めていただいて、より正確な値が知りたい場合や、イレギュラーなライフステージにいる場合は、かかりつけの獣医さんまでご相談いただけますようお願い申し上げます。また、計算式に誤りや、間違った情報が掲載されていることにお気づきになられた場合、速やかに対応致しますので、恐れ入りますが運営者までお知らせをお願い致します。
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  margin: 2.8rem auto;
  width: 100%;
  max-width: 600px;
  min-height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  color: black;
  padding: 0 2rem;
  h1,
  p {
    margin: 0;
  }
  section {
    margin-bottom: 1.5rem;
  }
  td {
    padding: 0 0.1rem;
  }
  .page-content-container {
    text-align: left;
  }
  .notice {
    border-radius: 8px;
    background: rgb(240, 240, 240);
    padding: 0.6rem;
  }
  .bcs-image-container {
    margin: 2rem 0;
    font-size: 10px;

    img {
      width: 100%;
    }
    .bcs-image-link-origin {
      padding: 0.2rem 1rem;
      color: rgb(143, 143, 143);
      a {
        color: rgb(143, 143, 143);
        text-decoration: underline;
      }
    }
  }
}
</style>
