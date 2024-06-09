import React from "react";
import CodeBlock from "./CodeBlock";
import './levelup.css'

const sampleCode = `
@SpringBootApplication
@RestController
public class DemoApplication {

@GetMapping("/helloworld")
public String hello() {
return"Hello World!";
}
}
`;
const LevelUp = () => {
  return (
    <div className="levelup">
      <div>
        <CodeBlock code={sampleCode} />
      </div>

      <div>
        <h3>Level up your Java™ code</h3>
        <p>
          With <span>Spring Boot</span> in your app, just a few lines of code is
        </p>
        <p>all you need to start building services like a boss.</p>
        <p>
          New to Spring? Try our simple <span>quickstart guide</span>.
        </p>
      </div>
    </div>
  );
};

export default LevelUp;
