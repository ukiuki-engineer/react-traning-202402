## memo

- useState
→こんな感じで使う

```javascript
let [変数, セッター関数] = useState(初期値);
```

## Reactの特徴をざっくり(Vue.jsと比較して)

ざっくり書き方の特徴をVue.jsと比較してまとめると  
**Vue.jsはHTMLにVueの構文を埋め込み、Vueのディレクティブを使用して色々な処理をする。
一方、ReactはJavaScriptの中にHTMLを埋め込み、JavaScriptの式を使って動的なコンテンツを生成する。また、ReactではHooksを使用して状態管理や副作用の処理を行う。**

### Vue.js

- htmlにjsを書く
    - js側の処理は`<script>`タグ内
    - html側からjs側の何かを呼ぶには`{{}}`
- Vueディレクティブ  
    →v-なんたら
- Vueインスタンスプロパティ  
    →data, computed, method, ...

### React

- jsにhtmlを書く(jsx)
- jsに書いたhtml内でjs側の何かを呼ぶには`{}`
- React Hooks  
    →DOM操作、状態管理や副作用の処理など、Reactコンポーネント内で行うさまざまなタスクを効果的に処理するためのユーティリティ

