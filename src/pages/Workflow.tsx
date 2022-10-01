import PostList from 'components/PostList';

const Workflow = () => {
  const posts = [
    {
      title: 'Hardware',
      id: 'hardware',
      content: [
        <h2 id="desktop">Desktop</h2>,
        <table>
          <tr>
            <th>CPU</th>
            <td>
              <a href="https://pcpartpicker.com/product/qtvqqs/amd-ryzen-7-5800x-38-ghz-8-core-processor-100-100000063wof">
                AMD Ryzen 7 5800X 3.8 GHz 8-Core Processor
              </a>
            </td>
          </tr>
          <tr>
            <th>GPU</th>
            <td>
              <a href="https://pcpartpicker.com/product/h7Tp99/gigabyte-radeon-rx-6700-xt-12-gb-gaming-oc-video-card-gv-r67xtgaming-oc-12gd">
                Gigabyte Radeon RX 6700 XT 12 GB GAMING OC
              </a>
            </td>
          </tr>
          <tr>
            <th>Memory</th>
            <td>
              <a href="https://pcpartpicker.com/product/Yg3mP6/corsair-vengeance-lpx-32-gb-2-x-16-gb-ddr4-3600-memory-cmk32gx4m2d3600c18">
                Corsair Vengeance LPX 32 GB (2 x 16 GB) DDR4-3600 CL18
              </a>
            </td>
          </tr>
          <tr>
            <th>Storage</th>
            <td>
              <a href="https://pcpartpicker.com/product/DDWBD3/samsung-980-pro-1-tb-m2-2280-nvme-solid-state-drive-mz-v8p1t0bam">
                Samsung 980 Pro 1 TB M.2-2280 NVME Solid State Drive
              </a>
            </td>
          </tr>
          <tr>
            <th>Motherboard</th>
            <td>
              <a href="https://pcpartpicker.com/product/3Mxbt6/msi-mag-b550-tomahawk-atx-am4-motherboard-mag-b550-tomahawk">
                MSI MAG B550 TOMAHAWK ATX AM4
              </a>
            </td>
          </tr>
          <tr>
            <th>Power Supply</th>
            <td>
              <a href="https://pcpartpicker.com/product/79tQzy/corsair-rmx-2018-750w-80-gold-certified-fully-modular-atx-power-supply-cp-9020179-na">
                Corsair RMx 750 W 80+ Gold Certified Fully Modular ATX
              </a>
            </td>
          </tr>
          <tr>
            <th>CPU Cooler</th>
            <td>
              <a href="https://pcpartpicker.com/product/HyTPxr/cooler-master-hyper-212-black-edition-42-cfm-cpu-cooler-rr-212s-20pk-r1">
                Cooler Master Hyper 212 Black Edition 42 CFM
              </a>
            </td>
          </tr>
          <tr>
            <th>Fans</th>
            <td>
              <a href="https://pcpartpicker.com/product/ntXfrH/noctua-case-fan-nfa14industrialppc3000pwm">
                Noctua A14 industrialPPC-3000 PWM 158.5 CFM 140 mm
              </a>
            </td>
          </tr>
          <tr>
            <th>Case</th>
            <td>
              <a href="https://pcpartpicker.com/product/bCYQzy/corsair-4000d-airflow-atx-mid-tower-case-cc-9011200-ww">
                Corsair 4000D Airflow ATX Mid Tower
              </a>
            </td>
          </tr>
        </table>,
        <h2 id="peripherals">Peripherals</h2>,
        <table>
          <tr>
            <th>Monitor</th>
            <td>
              <a href="https://pcpartpicker.com/product/q9x9TW/lg-34uc89g-b-340-2560x1080-166hz-monitor-34uc89g-b">
                LG 34UC89G-B 34&quot; 21:9 Curved 144 Hz G-Sync IPS
              </a>
            </td>
          </tr>
          <tr>
            <th>Keyboard</th>
            <td>
              <a href="https://pcpartpicker.com/product/Tj2rxr/gskill-ripjaws-km780-mx-wired-gaming-keyboard-gk-ksr1c4-km780s10na">
                G.Skill RIPJAWS KM780 MX RGB Wired Gaming Keyboard
              </a>
            </td>
          </tr>
          <tr>
            <th>Mouse</th>
            <td>
              <a href="https://pcpartpicker.com/product/R27CmG/gskill-mouse-gml8200cl8mx780d10">
                G.Skill RIPJAWS MX780 Wired Laser Mouse
              </a>
            </td>
          </tr>
        </table>,
      ],
    },
    {
      title: 'Software',
      id: 'software',
      content: [
        <h2 id="system">System</h2>,
        <img src="https://i.imgur.com/GsIFw8d.png" alt="" />,
        <table>
          <tr>
            <th>Operating System</th>
            <td>
              <a href="https://wiki.archlinux.org/title/Arch_Linux">
                Arch Linux
              </a>
            </td>
          </tr>
          <tr>
            <th>Text Editor</th>
            <td>
              <a href="https://github.com/neovim/neovim">NeoVim</a>
            </td>
          </tr>
          <tr>
            <th>Terminal Multiplexer</th>
            <td>
              <a href="https://github.com/tmux/tmux">tmux</a>
            </td>
          </tr>
          <tr>
            <th>AUR Helper</th>
            <td>
              <a href="https://github.com/Morganamilo/paru">paru</a>
            </td>
          </tr>
        </table>,
        <h2 id="programming">Programming</h2>,
        <img
          src="https://i.imgur.com/bThW7ef.png"
          alt=""
          style={{ width: '100%' }}
        />,
        <table>
          <tr>
            <th>Language</th>
            <th>Language Server</th>
            <th>Linter</th>
            <th>Formatter/Fixer</th>
          </tr>
          <tr>
            <th>Bash</th>
            <td>
              <a href="https://github.com/bash-lsp/bash-language-server">
                Bash Language Server
              </a>
            </td>
            <td>
              <a href="https://github.com/koalaman/shellcheck">ShellCheck</a>
            </td>
            <td>
              <a href="https://github.com/mvdan/sh">sh</a>
            </td>
          </tr>
          <tr>
            <th>C++</th>
            <td>
              <a href="https://github.com/clangd/clangd">clangd</a>
            </td>
            <td>
              <a href="https://github.com/danmar/cppcheck">Cppcheck</a>
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <th>Lua</th>
            <td>
              <a href="https://github.com/sumneko/lua-language-server">
                Lua Language Server
              </a>
            </td>
            <td>
              <a href="https://github.com/Kampfkarren/selene">Selene</a>
            </td>
            <td>
              <a href="https://github.com/JohnnyMorganz/StyLua">StyLua</a>
            </td>
          </tr>
          <tr>
            <th>Python</th>
            <td>
              <a href="https://github.com/microsoft/pyright">Pyright</a>
            </td>
            <td>
              <a href="https://github.com/PyCQA/pylint">Pylint</a>,&nbsp;
              <a href="https://github.com/PyCQA/flake8">Flake8</a>
            </td>
            <td>
              <a href="https://github.com/psf/black">Black</a>,&nbsp;
              <a href="https://github.com/PyCQA/isort">isort</a>
            </td>
          </tr>
          <tr>
            <th>Rust</th>
            <td>
              <a href="https://github.com/rust-lang/rust-analyzer">
                Rust Analyzer
              </a>
            </td>
            <td>&nbsp;</td>
            <td>
              <a href="https://github.com/rust-lang/rustfmt">rustfmt</a>
            </td>
          </tr>
          <tr>
            <th>TypeScript</th>
            <td>
              <a href="https://github.com/typescript-language-server/typescript-language-server">
                Typescript Language Server
              </a>
            </td>
            <td>
              <a href="https://github.com/eslint/eslint">ESLint</a>
            </td>
            <td>
              <a href="https://github.com/prettier/prettier">Prettier</a>
            </td>
          </tr>
        </table>,
      ],
    },
  ];
  return <PostList posts={posts} />;
};

export default Workflow;
