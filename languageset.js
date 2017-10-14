var textSet = {
    "english": {
        "Language": "English",
        "Title": "EchoDemo",
        "Theme": "How echo chambers emerge from social media",
        "Scenario": "Scenario",
        "Default": "Default",
        "AdvancedParameters": "Advanced Parameters",
        "Tolerance": "Tolerance",
        "ToleranceDiscription": "Messages reflecting opinions within this range from an agent’s own opinion are considered as concordant, otherwise as discordant. Concordant messages can influence an agent’s own opinion. Furthermore, an agent will occasionally unfriend neighbors who post discordant messages.",
        "Low": "Low",
        "Medium": "Medium",
        "High": "High",
        "Influence": "Influence",
        "InfluenceDiscription": "An agent’s opinion is updated to become more similar, on average, to those reflected in concordant messages from neighbors. The influence controls how fast this happens.",
        "Off": "Off",
        "Weak": "Weak",
        "Strong": "Strong",
        "Unfriending": "Unfriending",
        "UnfriendingDiscription": "This parameter regulates how often an agent will unfriend a neighbor who posts a discordant message, and replace it with a randomly selected new friend.",
        "Never": "Never",
        "Sometimes": "Sometimes",
        "Often": "Often",
        "Progressive": "Progressive",
        "Conservative": "Conservative",
        "LessPopular": "Less Popular",
        "MorePopular": "More Popular",
        "Start": "Start",
        "Stop": "Stop",
        "Reset": "Reset",
        "Speed": "Speed",
        "GraphTitle": "Average Diversity of Friend Opinions",
        "GraphDiscription": "This plot tracks how the opinions of an agent’s friends become more or less different from the agent’s own opinion, on average. Decreasing diversity indicates an echo-chamber effect.",
        "Time": "Time",
        "ParameterSetting": "Parameter Setting",
        "Scenario01Discription": "Without influence and unfriending, agents are exposed to diverse opinions but their own opinions do not change, and the underlying network structure stays the same.",
        "Scenario02Discription": "Without unfriending, the network structure remains unchanged and agents are exposed to diverse opinions. However, influence causes agents’ opinions to change based on these exposures. Depending on the initial conditions and on the tolerance, the network converges either to a homogeneous state where all (or almost all) agents have a moderate opinion, or to a state where two (or more) diverse opinions coexist.",
        "Scenario03Discription": "Without influence, opinions do not change. However, the unfriending process allows the agents to slowly sort themselves into a few homogeneous groups.",
        "Scenario04Discription": "When agents are influenced by their friends with similar opinions and can unfriend those with different opinions, the network quickly converges into two or more segregated and homogeneous echo-chambers. The number depends on the tolerance, as long as it is not too high: the smaller the tolerance, the more echo chambers.",
        "Scenario05Discription": "With high tolerance, unfriending has small effect. Influence causes the system to quickly converge to a single group with homogeneous opinions.",
        "PostMessage": "User [t_node.name] posts a new message.",
        "RepostMessage": "User [t_node.name] reposts user [repost_node.name]'s message.",
        "ReadMessage": "User [t_node.name] reads [concordant_nodes.length] messages.",
        "BecomeMoreProgressice": "User [t_node.name] becomes a bit more progressive.",
        "BecomeLessProgressice": "User [t_node.name] becomes a bit less progressive.",
        "BecomeLessConservative": "User [t_node.name] becomes a bit less conservative.",
        "BecomeMoreConservative": "User [t_node.name] becomes a bit more conservative.",
        "Unfollow": "User [t_node.name] unfollows user [del_node.name], follows user[add_node.name].",
        "TranslatersName": " "
    },
    "japanese": {
        "Language": "日本語",
        "Title": "エコーデモ",
        "Theme": "エコーチェンバーはどのようにしてソーシャルメディアから生じるのか",
        "Scenario": "シナリオ",
        "Default": "初期値",
        "AdvancedParameters": "高度なパラメータ",
        "Tolerance": "許容範囲",
        "ToleranceDiscription": "各個人は自分の意見をもっていて、それをメッセージとして投稿します。友人のメッセージが自分の許容範囲にある場合は「合うメッセージ」、そうでない場合は「合わないメッセージ」とみなします。自分に合うメッセージから個人は影響を受けます。そして、自分に合わないメッセージを投稿する友人をしばしばアンフォローします。",
        "Low": "低",
        "Medium": "中",
        "High": "高",
        "Influence": "社会的影響",
        "InfluenceDiscription": "各個人の意見は、その人に合うメッセージから影響を受けて変化し、次第に友人たちの意見に似ていきます。社会的影響のパラメータは、この変化の速さを調整します。",
        "Off": "なし",
        "Weak": "弱",
        "Strong": "強",
        "Unfriending": "アンフォローの頻度",
        "UnfriendingDiscription": "このパラメータはアンフォローの頻度を表します。自分に合わないメッセージを投稿する友人1名をアンフォローし、その後、ランダムに新しい友人を1人フォローします。",
        "Never": "なし",
        "Sometimes": "時々",
        "Often": "しばしば",
        "Progressive": "進歩的",
        "Conservative": "保守的",
        "LessPopular": "人気がない",
        "MorePopular": "人気がある",
        "Start": "開始",
        "Stop": "停止",
        "Reset": "初期化",
        "Speed": "速度",
        "GraphTitle": "友人の意見の平均多様性",
        "GraphDiscription": "このグラフは、友人たちの意見がどのように変化していくのかを表しています。時間と共に意見の多様性が減少するということは、エコーチェンバーの効果を示しています。",
        "Time": "時間",
        "ParameterSetting": "パラメータ設定",
        "Scenario01Discription": "社会的影響とアンフォローをなしにすると、個人はいろいろなメッセージを受け取りますが、自身の意見は変わりません。アンフォローもしないため、友人関係のネットワークも変化しません。",
        "Scenario02Discription": "アンフォローをなしにした場合、友人関係のネットワークは全く変わりませんが、個人はいろいろなメッセージを受け取ります。そして、受け取ったメッセージから社会的影響を受けて、個人の意見は徐々に変化していきます。初期状態と許容範囲の値によって、最終的には全員が中間的な1つの意見をもつネットワークか、2つ以上の違う意見が共存するネットワークのどちらかになります。",
        "Scenario03Discription": "社会的影響をなしにした場合、各個人の意見は変化しません。しかし、アンフォローを繰り返すことによって、徐々に同じ意見をもつ人からなる少数のグループをつくります。",
        "Scenario04Discription": "社会的影響とアンフォローがある場合、ネットワークは複数の同じ意見からなるエコーチェンバーに分断されます。許容範囲が大きすぎなければ、その大きさによって分断の数が決まります。許容範囲が小さいほど、多くのエコーチェンバーに分断されます。",
        "Scenario05Discription": "許容範囲が大きい場合、アンフォローはあまり影響しません。この場合、社会的影響によって、すぐに全員が同じ意見をもつようになります。",
        "PostMessage": "ユーザー[t_node.name]が新しいメッセージを投稿しました。",
        "RepostMessage": "ユーザー[t_node.name]がユーザー[repost_node.name]のメッセージを共有しました。",
        "ReadMessage": "ユーザー[t_node.name]が[concordant_nodes.length]つのメッセージを読みました。",
        "BecomeMoreProgressice": "ユーザー[t_node.name]はやや進歩的になりました。",
        "BecomeLessProgressice": "ユーザー[t_node.name]はやや進歩的ではなくなりました。",
        "BecomeLessConservative": "ユーザー[t_node.name]はやや保守的ではなくなりました。",
        "BecomeMoreConservative": "ユーザー[t_node.name]はやや保守的になりました。",
        "Unfollow": "ユーザー[t_node.name]がユーザー[del_node.name]をアンフォローし、ユーザー[add_node.name]をフォローしました。",
        "TranslatersName": "Japanese translation by <a href='https://github.com/ayahito-saji'>Ayahito Saji</a> and <a href='http://www.colorlessgreen.info/'>Kazutoshi Sasahara</a>"
    },
    "Chinese": {
        "Language": "中文",
        "Title": "回音演示",
        "Theme": "回音室在社交网络中是如何诞生的",
        "Scenario": "场景",
        "Default": "初始值",
        "AdvancedParameters": "重要参数",
        "Tolerance": "容忍度",
        "ToleranceDiscription": "每条消息内在是带有观点的。我们把与当前主体观点相近的消息称为一致消息，否则为不一致消息。一致消息会影响当前主体的观点。同时，当前主体可能会取消关注发布不一致消息的已关注用户。",
        "Low": "低",
        "Medium": "中",
        "High": "高",
        "Influence": "易影响度",
        "InfluenceDiscription": "每个主体只接受与他观点相近的消息并且被其影响。每个主体的观点会逐渐演变并且趋近于他接受的消息的观点的平均值。该参数控制了主体观点趋同于其接受观点的速度。",
        "Off": "关",
        "Weak": "弱",
        "Strong": "强",
        "Unfriending": "取消关注",
        "UnfriendingDiscription": "该参数调节了当前主体取消关注的频率。每个主体可能会取关一位与其观点不一致的已关注用户，然后随机从社交网络中选取一个用户关注。",
        "Never": "从不",
        "Sometimes": "偶尔",
        "Often": "经常",
        "Progressive": "激进",
        "Conservative": "保守",
        "LessPopular": "不受欢迎",
        "MorePopular": "受欢迎",
        "Start": "开始",
        "Stop": "停止",
        "Reset": "重置",
        "Speed": "速度",
        "GraphTitle": "与关注用户观点差异平均值",
        "GraphDiscription": "该图追踪了在整个网络中，主体与其关注用户之间观点差的平均值。该值的逐步减小显示了回音室效应的逐步产生。",
        "Time": "时间",
        "ParameterSetting": "参数设置",
        "Scenario01Discription": "如果所有主体不受他人影响并且从不改变其关注人，那么即使他们置身于一个观点多样的环境里，他们的观点也不会改变。另外，潜在的社交网络结构也不会改变。",
        "Scenario02Discription": "如果没有‘取消关注’机制，那么网络结构不会改变，并且每个主体都会一直置身于多样观点的环境中。然而，主体的观点仍然会受到其关注人的影响。依赖于不同的初始网络结构和主体的容忍度，社交网络会演变成 1）一个同质网络。换言之，近乎所有主体会持有一个相对中立的观点，或者 2）一个多种观点和谐共存的网络。",
        "Scenario03Discription": "如果所有主体皆不受他人影响，那么他们的观点也不会改变。然而，‘取消关注’机制仍然促使整个社交网络缓慢地分化为少量的同质子网络。",
        "Scenario04Discription": "如果主体会受到持有相似观点的关注用户影响并且能够改变其关注的用户，那么网络会很快地收敛成两个或以上的同质并且相互隔绝的回音室。回音室的数目取决于参数容忍度：抛开容忍度过高的情况不谈，更小的容忍度会产生更多的回音室。",
        "Scenario05Discription": "很高的容忍度会使取关机制近乎无用。人们轻易受到周围一切消息的影响，这促使整个系统很快收敛于一个统一的同质网络。",
        "PostMessage": "用户[t_node.name]发布了一条新消息。",
        "RepostMessage": "用户[t_node.name]转发了用户[repost_node.name]的消息。",
        "ReadMessage": "用户[t_node.name]读了[concordant_nodes.length]条消息。",
        "BecomeMoreProgressice": "用户[t_node.name]变得激进了。",
        "BecomeLessProgressice": "用户[t_node.name]变得不那么激进了。",
        "BecomeLessConservative": "用户[t_node.name]变得不那么保守了。",
        "BecomeMoreConservative": "用户[t_node.name]变得保守了。",
        "Unfollow": "用户[t_node.name]取消关注了用户[del_node.name]，关注了用户[add_node.name]。",
        "TranslatersName": "Chinese translation by <a href='http://roisevege.github.io/'>Wen Chen</a>"
    }
}