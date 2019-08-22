import * as React from "react";
import { useState, useEffect } from "react";
import Todo from "../types/todo";
import { Link } from "react-router-dom";
import axios from "axios";
import "./home.scss";
const Home: React.SFC = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className="index">
      <div className="nav">
        <div className="nav-in">
          <div className="wilico">
            <Link to={"/"}>Wilico</Link>
          </div>
          <div className="setting">{/* <setting /> */}</div>
        </div>
      </div>
      <div className="top">
        <div className="top-image">
          <img src="/public/img/index.jpg" />
          <div className="black-back" />
        </div>
        <div className="catch-copy">
          <h1>Wilico</h1>
          <p>もっと、手軽に</p>
          <p className="concept">もっと、健康に。</p>
        </div>
        <div className="user-button">
          <button type="button">新規登録</button>
        </div>
        <p className="coach">
          {/* <nuxt-link to="/index_coach">管理栄養士の方はこちら</nuxt-link> */}
        </p>
      </div>
      <div className="explain">
        <p className="overview">
          食と栄養のプロである管理栄養士と気軽に繋がれるサービス
        </p>
        <p className="detail">
          <span className="bold">２型糖尿病</span>のコレステロール値や血糖値の
          <span className="bold">数値改善</span>に苦労している
          <br />
          健康診断でひっかかってしまい食事に気をつけたい
          <br />
          <span className="bold">健康的なダイエット</span>がしたいなど
        </p>
        <p className="detail">
          <br />
          食と栄養に関する 全ての悩みに、
          <span className="bold">本気で向き合える</span>のが管理栄養士という存在
        </p>
        <p className="detail">
          写真を撮って投稿するだけで
          <br />
          <span className="bold">あなた専属の管理栄養士</span>が
          <br />
          あなたに合った栄養指導をしてくれる。
        </p>
      </div>
      <div className="feature-box">
        <div className="feature-element">
          <div className="img-box">
            <div className="user-mypage card1">
              <img src="/public/img/chat.png" alt="メッセージ" />
            </div>
            <div className="timeline card1">
              <img src="/public/img/TimeLine.png" alt="タイムライン" />
            </div>
          </div>
          <div className="content">
            <h3>驚きの手軽さ</h3>
            <p className="sub">写真を撮って投稿するだけ</p>
            <p>
              食事の写真を撮ってタイムラインに投稿するだけで、専属のコーチに写真が届き、アドバイスがもらえる。
            </p>
          </div>
        </div>
        <div className="feature-element reverse">
          <div className="content t-30">
            <h3>十人十色なプラン</h3>
            <p className="sub">あなたに合ったプランが見つかる</p>
            <p>
              多種多様なコーチが
              <br />
              いろんなプランを出しているから
              <br />
              あなたに合ったプランが見つかりやすい。
            </p>
          </div>
          <div>
            <div className="plan-index card2">
              <img src="/public/img/planIndex.png" alt="プラン一覧" />
            </div>
          </div>
        </div>
        <div className="feature-element">
          <div className="img-box card1">
            <div className="user-mypage">
              <img src="/public/img/mypage.png" alt="マイページ" />
            </div>
            <div className="timeline card1">
              <img src="/public/img/planShow.png" alt="プラン詳細" />
            </div>
          </div>
          <div className="content">
            <h3>安心のクオリティ</h3>
            <p className="sub">コーチ全員が管理栄養士</p>
            <p>
              コーチに登録できるのは食と栄養のプロである管理栄養士だけ。
              <br />
              食と栄養のプロによる、あなたの生活に、
              あなたの習慣に合わせた、栄養指導を受けよう。
            </p>
          </div>
        </div>
      </div>
      <div className="how-wilico">
        <h3>Wilicoライフ</h3>
        <div className="how t-50 over">
          <div className="start-container">
            <div className="start-box">
              <h5>あなた専属のコーチ</h5>
              <div className="start-elements t-0 flex">
                <div className="feature">
                  <p>
                    あなたが契約した専属のコーチが、Wilicoライフ中マンツーマンで寄り添ってくれます。もし間違った選択をしてもすぐにカバーしてもらえるから安心。
                  </p>
                </div>
                <div className="img-box">
                  <img src="@/assets/img/coach.png" alt="専属のコーチ" />
                </div>
              </div>
            </div>
            <div className="start-box">
              <h5>いつでも相談</h5>
              <div className="start-elements t-0 flex">
                <div className="feature">
                  <p>
                    マンツーマンだから、「飲み会が入ってしまったけどどうしたら？」「夜勤のときは？」など、困った時にすぐに頼れます。
                  </p>
                </div>
                <div className="img-box">
                  <img src="@/assets/img/wherever.png" alt="専属のコーチ" />
                </div>
              </div>
            </div>
            <div className="start-box">
              <h5>食事ログを残す</h5>
              <div className="start-elements t-0 flex">
                <div className="feature">
                  <p>
                    写真SNS感覚で、コメントとともに食事の写真を投稿。すると自動的に、コーチにその写真が共有され、コーチからのアドバイスがチャットルームに届きます。
                  </p>
                </div>
                <div className="img-box">
                  <img src="@/assets/img/meal.png" alt="専属のコーチ" />
                </div>
              </div>
            </div>
            <div className="start-box">
              <h5>投稿を見て楽しむ</h5>
              <div className="start-elements t-0 flex">
                <div className="feature">
                  <p>
                    栄養管理してもらっている人の健康的なダイエットや食と栄養のプロの食事が覗き見できるのはWilicoだけ。気軽にコメントなどで交流しながら楽しみましょう。
                  </p>
                </div>
                <div className="img-box">
                  <img src="@/assets/img/hapiness.png" alt="専属のコーチ" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="t-50">はじめ方</h3>
        <div className="how t-50">
          <div className="start-container">
            <div className="start-box box-number1">
              <div className="start-elements">
                <h5>プランを選ぶ</h5>
                <p>
                  あなたの予算等に合ったプランを選んでください。プランは約3000円/月〜あります。サービスの検索アルゴリズムが、あなたをサポートします。
                </p>
              </div>
            </div>
            <div className="start-box box-number2">
              <div className="start-elements">
                <h5>相談メッセージ</h5>
                <p>
                  プランを契約を開始する前にフォームから、相談メッセージを送ってみましょう。あなたの目的に本当にマッチするコーチを探しましょう。
                </p>
              </div>
            </div>
            <div className="start-box box-number3">
              <div className="start-elements">
                <h5>契約期間を決める</h5>
                <p>
                  いつまでに、どんな状態になりたいか。どれくらい痩せたいか。コーチに相談しながら決め、それから契約を開始しましょう。無理は禁物ですよ。
                </p>
              </div>
            </div>
            <div className="start-box box-number4">
              <div className="start-elements">
                <h5>Wilicoライフスタート</h5>
                <p>
                  契約を開始したら、Wilicoライフスタートです。いつでも、どこでも、あなた専属のコーチにメッセージしながら、無理のないWilicoライフを始めましょう。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
