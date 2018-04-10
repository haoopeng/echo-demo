var textSet = {
    "italiano": {
        "PostMessage": "L'utente [t_node.name] pubblica un nuovo messaggio.",
        "InfluenceDiscription": "L'opinione di un agente è aggiornata in modo tale da avvicinarsi alla media delle opinioni rispecchiate nei messaggi concordanti dei propri vicini. L'influenza controlla la velocità di tale processo.",
        "InfoRepresentQ": "Che cosa rappresenta la rete?",
        "InfoInstructionsQ": "Che cosa posso fare?",
        "Title": "EchoDemo",
        "Stop": "Stop",
        "InfoTitle": "The EchoDemo: FAQ",
        "Conservative": "Conservatore",
        "Start": "Via",
        "Theme": "Come si crea la polarizzazione sui social media",
        "InfoHowQ": "Come funziona?",
        "Scenario04Discription": "Quando gli agenti sono influenzati dagli amici con opinioni affini e rompono l'amicizia con chi ha opinioni opposte, la rete sociale converge velocemente a due o più gruppi polarizzati (echo chambers). Per valori non troppo alti della tolleranza, il numero di gruppi dipende dalla tolleranza. Più bassa è la tolleranza, maggiore il numero di gruppi.",
        "Low": "Basso",
        "BecomeLessProgressice": "L'utente [t_node.name] diventa un po' meno progressista.",
        "Scenario01Discription": "Senza influenza sociale e rottura delle amicizie, gli agenti sono esposti a opinioni diversificate ma non cambiano la propria opinione, e la struttura della rete sociale sottostante rimane immutata.",
        "RepostMessage": "L'utente [t_node.name] ripubblica il messaggio dell'utente [repost_node.name].",
        "Tolerance": "Tolleranza",
        "TranslatersName": "Traduzione italiana a cura di <a href='http://glciampaglia.com'>Giovanni Luca Ciampaglia</a> and <a href='http://cnets.indiana.edu/fil/'>Filippo Menczer</a>",
        "Medium": "Medio",
        "Scenario": "Scenario",
        "ReadMessage": "L'utente [t_node.name] legge [concordant_nodes.length] messaggi.",
        "Never": "Mai",
        "Weak": "Debole",
        "InfoInstructionsA": "Inizialmente, gli utenti hanno delle opinioni variegate e sono collegati in modo casuale. Prova differenti valori dei parametri (o scegli uno degli scenari), lancia la simulazione, e osserva cosa succede. Come cambiano le opinioni degli utenti e come cambia la struttura della rete?",
        "Reset": "Reset",
        "Strong": "Forte",
        "Unfriending": "Rompere l'amicizia",
        "Scenario02Discription": "Senza la rottura delle amicizie, la struttura della rete sociale rimane immutata e gli agenti sono esposti a opinioni eterogenee. Tuttavia, l'influenza sociale porta gli agenti a cambiare opinione in base all'esposizione ad opinioni diverse. A seconda delle condizioni iniziali e della tolleranza, la rete o converge ad uno stato omogeneo in cui tutti (o quasi tutti) gli agenti hanno un'opinione moderata, oppure ad uno stato in cui due o più opinioni opposte coesistono.  ",
        "Off": "Spento",
        "InfoIntroQ": "Che cos'è EchoDemo?",
        "Language": "Italiano",
        "Default": "Predefinito",
        "Sometimes": "A volte",
        "MorePopular": "Molto popolare",
        "Scenario05Discription": "Con alta tolleranza, la rottura delle amicizie ha poco effetto. L'influenza sociale porta il sistema a convergere velocemente ad un singolo gruppo dalle opinioni omogenee.",
        "Time": "Tempo",
        "Scenario03Discription": "Senza influenza sociale, le opinioni non cambiano. Tuttavia, il processo di rottura delle amicizie permette agli agenti di riorganizzarsi lentamente in una manciata di gruppi omogenei.",
        "GraphDiscription": "Questo grafico traccia come le opinioni degli amici di un agente diventano più o meno diversificate da quelle dell'agente. Una diversità decrescente indica la presenza dell'effetto di polarizzazione.",
        "UnfriendingDiscription": "Questo parametro regola quanto spesso un agente toglierà l'amicizia a un vicino che posta messaggi discordanti, rimpiazzandolo con un vicino scelto a caso.",
        "InfoRepresentA": "Ciascun nodo nella rete rappresenta un utente; la sua grandezza rappresenta la popolarità (numero di amici) e il suo colore rappresenta l'opinione politica. I collegamenti tra amici sono da considerare reciproci.",
        "AdvancedParameters": "Parametri avanzati",
        "Often": "Spesso",
        "Progressive": "Progressista",
        "GraphTitle": "Diversità media delle opinioni degli amici",
        "Unfollow": "L'utente [t_node.name] smette di seguire l'utente [del_node.name], segue l'utente [add_node.name].",
        "Influence": "Influenza",
        "BecomeMoreConservative": "L'utente [t_node.name] diventa un po' più conservatore.",
        "BecomeMoreProgressice": "L'utente [t_node.name] diventa un po' più progressista.",
        "High": "Alto",
        "ToleranceDiscription": "La tolleranza determina come gli agenti reagiscono ad opinioni diverse. I messaggi le cui opinioni cadono entro questo intervallo centrato sull'opinione dell'agente sono considerati concordanti, altrimenti sono discordanti. I messaggi concordanti influenzano l'opinione dell'agente. Inoltre, un agente può occasionalmente togliere l'amicizia a quei vicini che postano messaggi discordanti.",
        "InfoHowA": "Gli utenti fanno quattro cose: (1) leggono i message postati/ri-postati dai loro amici; (2) cambiano le proprie opinioni un po' (in base al parametro di influenza) in seguito alla lettura dei messaggi concordanti (in base al parametro della tolleranza); (3) ogni tanto (in base al parametro di unfriending) sostituiscono un amico che posta messaggi sufficientemente differenti dalla loro opinione (in base al parametro della tolleranza) con un amico scelto a caso; e (4) postano un nuovo messaggio che riflette la loro opinione, o ripostano un messaggio concordante (in base al parametro della tolleranza) da un amico scelto a caso.",
        "BecomeLessConservative": "L'utente [t_node.name] diventa un po' meno conservatore.",
        "ParameterSetting": "Impostazione dei parametri",
        "Speed": "Velocità",
        "LessPopular": "Poco popolare",
        "InfoIntroA": "EchoDemo è una simulazione computerizzata che dimostra come due meccanismi base dei media sociali --- l'influenzare le opinioni altrui e la rimozione (unfriending) di chi ha opinioni differenti dalle nostre --- possano produrre delle reti sociali polarizzata e segregate. Per maggiori dettagli consulta il nostro [articolo]."
    },
    "japanese": {
        "PostMessage": "ユーザー[t_node.name]が新しいメッセージを投稿しました。",
        "InfluenceDiscription": "各個人の意見は、その人に合うメッセージから影響を受けて変化し、次第に友人たちの意見に似ていきます。社会的影響のパラメータは、この変化の速さを調整します。",
        "InfoRepresentQ": "ネットワークは何を表しているのか？",
        "InfoInstructionsQ": "どうする？",
        "Title": "エコーデモ",
        "Stop": "停止",
        "InfoTitle": "エコーデモ: FAQ",
        "Conservative": "保守的",
        "Start": "開始",
        "Theme": "エコーチェンバーはどのようにしてソーシャルメディアから生じるのか",
        "InfoHowQ": "どのように動作するのか？",
        "Scenario04Discription": "社会的影響とアンフォローがある場合、ネットワークは複数の同じ意見からなるエコーチェンバーに分断されます。許容範囲が大きすぎなければ、その大きさによって分断の数が決まります。許容範囲が小さいほど、多くのエコーチェンバーに分断されます。",
        "Low": "低",
        "BecomeLessProgressice": "ユーザー[t_node.name]はやや進歩的ではなくなりました。",
        "Scenario01Discription": "社会的影響とアンフォローをなしにすると、個人はいろいろなメッセージを受け取りますが、自身の意見は変わりません。アンフォローもしないため、友人関係のネットワークも変化しません。",
        "RepostMessage": "ユーザー[t_node.name]がユーザー[repost_node.name]のメッセージを共有しました。",
        "Tolerance": "許容範囲",
        "TranslatersName": "Japanese translation by <a href='https://github.com/ayahito-saji'>Ayahito Saji</a> and <a href='http://www.colorlessgreen.info/'>Kazutoshi Sasahara</a>",
        "Medium": "中",
        "Scenario": "シナリオ",
        "ReadMessage": "ユーザー[t_node.name]が[concordant_nodes.length]つのメッセージを読みました。",
        "Never": "なし",
        "Weak": "弱",
        "InfoInstructionsA": "初期状態では、ユーザたちは多様でランダムな意見をもち、友人関係のネットワークでは互いにランダムにつながっています。異なるパラメータを選んで（あるいは、シナリオを1つ選んで）、シミュレーションを開始し、何が起こるのかを観察しましょう。どのようにユーザの意見や社会的ネットワークの構造が変化するでしょうか？",
        "Reset": "初期化",
        "Strong": "強",
        "Unfriending": "アンフォローの頻度",
        "Scenario02Discription": "アンフォローをなしにした場合、友人関係のネットワークは全く変わりませんが、個人はいろいろなメッセージを受け取ります。そして、受け取ったメッセージから社会的影響を受けて、個人の意見は徐々に変化していきます。初期状態と許容範囲の値によって、最終的には全員が中間的な1つの意見をもつネットワークか、2つ以上の違う意見が共存するネットワークのどちらかになります。",
        "Off": "なし",
        "InfoIntroQ": "エコーデモとは？",
        "Language": "日本語",
        "Default": "初期値",
        "Sometimes": "時々",
        "MorePopular": "人気がある",
        "Scenario05Discription": "許容範囲が大きい場合、アンフォローはあまり影響しません。この場合、社会的影響によって、すぐに全員が同じ意見をもつようになります。",
        "Time": "時間",
        "Scenario03Discription": "社会的影響をなしにした場合、各個人の意見は変化しません。しかし、アンフォローを繰り返すことによって、徐々に同じ意見をもつ人からなる少数のグループをつくります。",
        "GraphDiscription": "このグラフは、友人たちの意見がどのように変化していくのかを表しています。時間と共に意見の多様性が減少するということは、エコーチェンバーの効果を示しています。",
        "UnfriendingDiscription": "このパラメータはアンフォローの頻度を表します。自分に合わないメッセージを投稿する友人1名をアンフォローし、その後、ランダムに新しい友人を1人フォローします。",
        "InfoRepresentA": "ネットワークのノードはユーザを、ノードの大きさはそのユーザの人気度（友人の数）を、ノードの色は政治的な意見を表しています。友人関係のつながりは双方的だと仮定します。",
        "AdvancedParameters": "高度なパラメータ",
        "Often": "しばしば",
        "Progressive": "進歩的",
        "GraphTitle": "友人の意見の平均多様性",
        "Unfollow": "ユーザー[t_node.name]がユーザー[del_node.name]をアンフォローし、ユーザー[add_node.name]をフォローしました。",
        "Influence": "社会的影響",
        "BecomeMoreConservative": "ユーザー[t_node.name]はやや保守的になりました。",
        "BecomeMoreProgressice": "ユーザー[t_node.name]はやや進歩的になりました。",
        "High": "高",
        "ToleranceDiscription": "許容範囲とは異なる意見に対する寛容性のことです。各個人は自分の意見をもっていて、それをメッセージとして投稿します。友人のメッセージが自分の許容範囲にある場合は「合うメッセージ」、そうでない場合は「合わないメッセージ」とみなします。自分に合うメッセージから個人は影響を受けます。そして、自分に合わないメッセージを投稿する友人をしばしばアンフォローします。",
        "InfoHowA": "ユーザは次の4つのことをします。(1)ユーザは友人が投稿・再投稿したメッセージ読みます。(2)ユーザはこれらのメッセージから影響を受けて、自分の意見を(社会的影響パラメータに基づいて)少しだけ変えます。(3)(アンフォローの頻度のパラメータに基づいて)時々、ユーザは自分の意見とは(許容範囲基づいて)十分に異なる意見のメッセージを投稿した友人1名をランダムにアンフォローし、別の友人1名をランダムに選んでフォローします。(4)ユーザは自分の意見を反映した新しいメッセージを投稿するか、ランダムに選んだ友人のメッセージを再投稿します。",
        "BecomeLessConservative": "ユーザー[t_node.name]はやや保守的ではなくなりました。",
        "ParameterSetting": "パラメータ設定",
        "Speed": "速度",
        "LessPopular": "人気がない",
        "InfoIntroA": "エコーデモは、ソーシャルメディアの2つの基本メカニズム（友人の意見から社会的影響を受ける、意見の合わない友人をアンフォローする）が、どのようにして偏極し分断された社会的ネットワークを生み出すのかをデモンストレーションするモデル・シミュレーションです。詳細は[論文]をご覧下さい。"
    },
    "chinese": {
        "PostMessage": "用户[t_node.name]发布了一条新消息。",
        "InfluenceDiscription": "每个主体的观点会被与他观点相近的消息所影响。平均来说，每个主体的观点会更新，并趋近于那些与他观点相近的消息。该参数控制主体观点向相近消息更新的速度。",
        "InfoRepresentQ": "该演示中的网络代表什么？",
        "InfoInstructionsQ": "我需要做什么？",
        "Title": "回音演示",
        "Stop": "停止",
        "InfoTitle": "回音演示: FAQ",
        "Conservative": "保守",
        "Start": "开始",
        "Theme": "回音室在社交网络中是如何诞生的",
        "InfoHowQ": "该演示的内在是如何工作的？",
        "Scenario04Discription": "当主体受到持有相似观点的关注用户的影响，并且能够取消关注持不同观点的用户，那么网络会很快地收敛成两个或以上的同质并且相互隔离的回音室。回音室的数目取决于容忍度：只要容忍度不过高，更小的容忍度通常会造成更多的回音室。",
        "Low": "低",
        "BecomeLessProgressice": "用户[t_node.name]变得不那么激进了。",
        "Scenario01Discription": "受影响度为零和取消关注机制不存在时，意味着主体不受他人影响并且从不取消其关注用户（朋友）。那么，虽然他们置身于一个观点多样的环境里，他们自身的观点也不会改变，潜在的社交网络结构也不会改变。",
        "RepostMessage": "用户[t_node.name]转发了用户[repost_node.name]的消息。",
        "Tolerance": "容忍度",
        "TranslatersName": "Chinese translation by <a href='http://roisevege.github.io/'>Wen Chen</a>",
        "Medium": "中",
        "Scenario": "场景",
        "ReadMessage": "用户[t_node.name]读了[concordant_nodes.length]条消息。",
        "Never": "从不",
        "Weak": "弱",
        "InfoInstructionsA": "在演示的最开始，用户持有各种不同的观点，并形成一个随机网络。你可以设定不同的参数值，开始这个演示模型（或者选取我们提供的场景），观察即将发生的一切。比如：用户的观点和网络结构是如何改变的？",
        "Reset": "重置",
        "Strong": "强",
        "Unfriending": "取消关注",
        "Scenario02Discription": "取消关注机制不存在时，网络结构不会改变，每个主体都会一直置身于多样观点的环境中。然而，受影响度致使主体的观点受到其关注用户的影响。根据不同的初始网络结构和容忍度参数，社交网络会演变成：（1） 一个同质网络，其中几乎所有主体会持有一个相对中立的观点；或者（2）一个多种观点和谐共存的网络。",
        "Off": "关",
        "InfoIntroQ": "回音演示是什么？",
        "Language": "中文",
        "Default": "初始值",
        "Sometimes": "偶尔",
        "MorePopular": "更受欢迎",
        "Scenario05Discription": "很高的容忍度会使取消关注机制近乎无用。人们轻易受到周围一切消息的影响，这促使整个系统很快收敛于一个统一的同质网络。",
        "Time": "时间",
        "Scenario03Discription": "受影响度为零时，主体皆不受他人影响，那么他们的观点也不会改变。然而，取消关注机制会使整个社交网络缓慢地分化为少量的同质子网络。",
        "GraphDiscription": "该图追踪了在整个网络中，主体与其关注用户之间观点差的平均值。该值的逐步减小显示了回音室效应的产生。",
        "UnfriendingDiscription": "该参数控制每个主体取消关注其朋友的概率。根据这个概率，当前主体会随机选取一位发出与其观点不一致消息的已关注用户 (朋友)，对其进行取消关注，然后从社交网络中随机选取一个新朋友 (进行关注)。",
        "InfoRepresentA": "网络中的每个节点代表社交网络中的一个用户；节点的大小代表该用户的受欢迎程度（朋友数目），节点的颜色代表用户所持有的观点。该网络中的朋友关系 (边) 是相互的。",
        "AdvancedParameters": "重要参数",
        "Often": "经常",
        "Progressive": "激进",
        "GraphTitle": "朋友之间的观点差异的平均值",
        "Unfollow": "用户[t_node.name]取消关注了用户[del_node.name]，关注了用户[add_node.name]。",
        "Influence": "受影响度",
        "BecomeMoreConservative": "用户[t_node.name]变得保守了。",
        "BecomeMoreProgressice": "用户[t_node.name]变得激进了。",
        "High": "高",
        "ToleranceDiscription": "该参数定义了用户对于不同观点的忍受程度。每条消息会反映某一观点值，我们把与当前主体观点相近的消息称为一致消息，反之称为不一致消息。一致消息会影响当前主体自身的观点。同时，当前主体可能会取消关注发布不一致消息的已关注用户。",
        "InfoHowA": "网络中的用户做四件事情：（1）他们阅读朋友发送/转发的消息；（2）他们会根据那些来自朋友的，并且与自己观点一致的消息（根据容忍度参数）来略微地改变自己的观点（根据受影响度参数）；（3）时不时地（根据取消关注参数），他们把一个发送与自己观点不一致的消息的朋友（根据容忍度参数）替换成一个随机选取的用户；（4）他们要么发送一条新消息显示自己的观点，要么随机转发一条朋友发送的一致消息（根据容忍度参数）。",
        "BecomeLessConservative": "用户[t_node.name]变得不那么保守了。",
        "ParameterSetting": "参数设置",
        "Speed": "速度",
        "LessPopular": "不太受欢迎",
        "InfoIntroA": "回音演示运用演示模型来展示社交网络的两种基本机制 --- （1）朋友间的观点互相影响（受影响度）；（2） 取消关注与自己观点不一致的人（取消关注）--- 如何造成社交网络的分化和隔离。详情请参考我们的论文[link]。"
    },
    "english": {
        "PostMessage": "User [t_node.name] posts a new message.",
        "InfluenceDiscription": "An agent’s opinion is updated to become more similar, on average, to those reflected in concordant messages from neighbors. The influence controls how fast this happens.",
        "InfoRepresentQ": "What does the network represent?",
        "InfoInstructionsQ": "What do I do?",
        "Title": "EchoDemo",
        "Stop": "Stop",
        "InfoTitle": "The EchoDemo: FAQ",
        "Conservative": "Conservative",
        "Start": "Start",
        "Theme": "How echo chambers emerge from social media",
        "InfoHowQ": "How does it work?",
        "Scenario04Discription": "When agents are influenced by their friends with similar opinions and can unfriend those with different opinions, the network quickly converges into two or more segregated and homogeneous echo-chambers. The number depends on the tolerance, as long as it is not too high: the smaller the tolerance, the more echo chambers.",
        "Low": "Low",
        "BecomeLessProgressice": "User [t_node.name] becomes a bit less progressive.",
        "Scenario01Discription": "Without influence and unfriending, agents are exposed to diverse opinions but their own opinions do not change, and the underlying network structure stays the same.",
        "RepostMessage": "User [t_node.name] reposts user [repost_node.name]'s message.",
        "Tolerance": "Tolerance",
        "TranslatersName": " ",
        "Medium": "Medium",
        "Scenario": "Scenario",
        "ReadMessage": "User [t_node.name] reads [concordant_nodes.length] messages.",
        "Never": "Never",
        "Weak": "Weak",
        "InfoInstructionsA": "Initially, users have diverse random opinions and are connected in a random network. Try different values of the parameters (or pick one of the scenarios), start the simulation, and observe what happens. How do user opinions and the network structure change?",
        "Reset": "Reset",
        "Strong": "Strong",
        "Unfriending": "Unfriending",
        "Scenario02Discription": "Without unfriending, the network structure remains unchanged and agents are exposed to diverse opinions. However, influence causes agents’ opinions to change based on these exposures. Depending on the initial conditions and on the tolerance, the network converges either to a homogeneous state where all (or almost all) agents have a moderate opinion, or to a state where two (or more) diverse opinions coexist.",
        "Off": "Off",
        "InfoIntroQ": "What is EchoDemo?",
        "Language": "English",
        "Default": "Default",
        "Sometimes": "Sometimes",
        "MorePopular": "More Popular",
        "Scenario05Discription": "With high tolerance, unfriending has small effect. Influence causes the system to quickly converge to a single group with homogeneous opinions.",
        "Time": "Time",
        "Scenario03Discription": "Without influence, opinions do not change. However, the unfriending process allows the agents to slowly sort themselves into a few homogeneous groups.",
        "GraphDiscription": "This plot tracks how the opinions of an agent’s friends become more or less different from the agent’s own opinion, on average. Decreasing diversity indicates an echo-chamber effect.",
        "UnfriendingDiscription": "This parameter regulates how often an agent will unfriend a neighbor who posts a discordant message, and replace it with a randomly selected new friend.",
        "InfoRepresentA": "Each node in the network represents a user; its size represents its popularity (number of friends) and its color represents its political opinion. Friend connections are assumed to be mutual.",
        "AdvancedParameters": "Advanced Parameters",
        "Often": "Often",
        "Progressive": "Progressive",
        "GraphTitle": "Average Diversity of Friend Opinions",
        "Unfollow": "User [t_node.name] unfollows user [del_node.name], follows user[add_node.name].",
        "Influence": "Influence",
        "BecomeMoreConservative": "User [t_node.name] becomes a bit more conservative.",
        "BecomeMoreProgressice": "User [t_node.name] becomes a bit more progressive.",
        "High": "High",
        "ToleranceDiscription": "Tolerance defines how agents deal with different opinions. Messages reflecting opinions within this range from an agent’s own opinion are considered as concordant, otherwise as discordant. Concordant messages can influence an agent’s own opinion. Furthermore, an agent will occasionally unfriend neighbors who post discordant messages.",
        "InfoHowA": "Users do four things: (1) they read messages posted/re-posted by their\nfriends; (2) they change their opinion a bit (based on the influence\nparameter) according to concordant messages (based on the tolerance\nparameter); (3) once in a while (based on the unfriending parameter) \nthey replace a friend who posts messages sufficiently different from\ntheir own opinion (based on the tolerance parameter) with a random\nfriend; and (4) they either post a new message reflecting their\nopinion, or re-post a concordant message (based on the tolerance\nparameter) from a random friend.",
        "BecomeLessConservative": "User [t_node.name] becomes a bit less conservative.",
        "ParameterSetting": "Parameter Setting",
        "Speed": "Speed",
        "LessPopular": "Less Popular",
        "InfoIntroA": "EchoDemo is a model simulation that demonstrates how two basic mechanisms of social media --- influencing friend opinions and unfriending people with different opinions --- can lead to polarized and segregated social networks. For more details check out our [paper]."
    }
}
