import React from "react";
import ForumThread from "./ForumThread.jsx";

const Forum = () => {
  return (
    <div class="forumpage">
      <h2>Forum</h2>

      <div class="todaystopic">
        <p>Topic of the Day:</p>
        <p>
          <strong>Simulation Theory</strong>
        </p>
        <p>
          Could our reality be nothing more than an elaborate computer
          simulation? This fascinating question bridges the gap <br></br>between
          science and philosophy, and we're inviting you to delve into
          discussions about the essence of reality, the mysteries of
          consciousness, and the role of technology in our lives. What do you
          think—are we living in a simulated world?
        </p>
      </div>

      <ForumThread />

      <div class="othertopics">
        <p>Discover more topics:</p>
        <ul>
          <li>The Trolley Problem</li>
          <li>Plato's Allegory of the Cave</li>
          <li>Free Will vs. Determinism</li>
          <li>The Ship of Theseus</li>
          <li>Artificial Intelligence & Ethics</li>
          <li>Existentialism and the Meaning of Life</li>
          <li>Philosophy of Mind</li>
          <li>Utopian and Dystopian Societies</li>
          <li>Ethics of Environmental Conservation</li>
        </ul>
      </div>
    </div>
  );
};

export default Forum;
