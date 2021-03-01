import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <div className='pulse-svg'>
      <div className='image-svg'>
        <motion.svg
          width='300'
          height='301'
          viewBox='0 0 300 301'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.line
            y1='0.5'
            x2='0'
            y2='0.5'
            x1='0'
            stroke='#86D7E5'
            animate={{ x1: 300 }}
            transition={{ duration: 1, delay: 1 }}
          />
          <motion.line
            y1='300.5'
            x2='0'
            y2='300.5'
            x1='0'
            stroke='#86D7E5'
            animate={{ x1: 300 }}
            transition={{ duration: 1 }}
          />
          <motion.line
            x1='0.5'
            y1='301'
            x2='0.5'
            y2='300'
            stroke='#86D7E5'
            animate={{ y2: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.line
            x1='299.5'
            y1='300'
            x2='299.5'
            y2='300'
            stroke='#86D7E5'
            animate={{ y2: 0 }}
            transition={{ duration: 1, delay: 1 }}
          />
          <motion.path
            d='M39.304 38.232H49.852C52.06 38.232 53.704 38.748 54.784 39.78C55.888 40.812 56.44 42.372 56.44 44.46C56.44 46.212 56.128 47.544 55.504 48.456C54.88 49.368 53.908 49.98 52.588 50.292V50.436C54.028 50.772 55.06 51.384 55.684 52.272C56.332 53.16 56.656 54.54 56.656 56.412C56.656 58.572 56.128 60.216 55.072 61.344C54.016 62.448 52.276 63 49.852 63H39.304V38.232ZM48.052 48.204C48.82 48.204 49.396 48.132 49.78 47.988C50.164 47.844 50.428 47.592 50.572 47.232C50.716 46.848 50.788 46.284 50.788 45.54C50.788 44.748 50.716 44.172 50.572 43.812C50.452 43.452 50.2 43.212 49.816 43.092C49.456 42.948 48.868 42.876 48.052 42.876H44.848V48.204H48.052ZM48.196 58.356C49.012 58.356 49.6 58.284 49.96 58.14C50.344 57.996 50.608 57.744 50.752 57.384C50.896 57 50.968 56.4 50.968 55.584C50.968 54.768 50.896 54.168 50.752 53.784C50.608 53.4 50.344 53.136 49.96 52.992C49.576 52.848 48.988 52.776 48.196 52.776H44.848V58.356H48.196Z'
            fill='#86D7E5'
            opacity={0}
            animate={{ rotateY: 360, opacity: 1 }}
            transition={{ duration: 1, delay: 2.3 }}
          />
          <motion.path
            d='M51.364 113L48.484 104.324H44.884V113H39.304V88.232H49.492C51.532 88.232 53.068 88.544 54.1 89.168C55.132 89.768 55.816 90.632 56.152 91.76C56.512 92.888 56.692 94.388 56.692 96.26C56.692 98.012 56.5 99.512 56.116 100.76C55.732 101.984 54.952 102.884 53.776 103.46L57.232 113H51.364ZM47.692 99.716C48.748 99.716 49.492 99.632 49.924 99.464C50.38 99.296 50.68 98.996 50.824 98.564C50.968 98.108 51.04 97.352 51.04 96.296C51.04 95.216 50.968 94.46 50.824 94.028C50.704 93.572 50.416 93.272 49.96 93.128C49.528 92.96 48.784 92.876 47.728 92.876H44.884V99.716H47.692Z'
            fill='#86D7E5'
            opacity={0}
            animate={{ rotateY: 360, opacity: 1 }}
            transition={{ duration: 1, delay: 2.4 }}
          />
          <motion.path
            d='M52.66 163L51.4 158.032H44.092L42.904 163H37.288L43.912 138.232H51.76L58.348 163H52.66ZM47.836 143.272H47.62L45.208 153.424H50.284L47.836 143.272Z'
            fill='#86D7E5'
            opacity={0}
            animate={{ rotateY: 360, opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          />
          <motion.path
            d='M52.048 213L44.776 198.852H44.596V213H39.232V188.232H44.884L51.688 201.228H51.868V188.232H57.232V213H52.048Z'
            fill='#86D7E5'
            opacity={0}
            animate={{ rotateY: 360, opacity: 1 }}
            transition={{ duration: 1, delay: 2.6 }}
          />
          <motion.path
            d='M39.304 238.232H47.08C50.2 238.232 52.42 238.592 53.74 239.312C55.084 240.032 55.912 241.184 56.224 242.768C56.56 244.352 56.728 246.968 56.728 250.616C56.728 254.264 56.56 256.88 56.224 258.464C55.912 260.048 55.084 261.2 53.74 261.92C52.42 262.64 50.2 263 47.08 263H39.304V238.232ZM46.936 258.356C48.424 258.356 49.42 258.236 49.924 257.996C50.428 257.756 50.74 257.168 50.86 256.232C51.004 255.272 51.076 253.4 51.076 250.616C51.076 247.832 51.004 245.972 50.86 245.036C50.716 244.076 50.392 243.476 49.888 243.236C49.408 242.996 48.424 242.876 46.936 242.876H44.884V258.356H46.936Z'
            fill='#86D7E5'
            opacity={0}
            animate={{ rotateY: 360, opacity: 1 }}
            transition={{ duration: 1, delay: 2.7 }}
          />
          <motion.g
            opacity={0}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            clip-path='url(#clip0)'
          >
            <path
              d='M181.529 155.25L175.681 151.364L162.732 146.656L137.676 166.499L145.716 180.885C145.823 180.947 145.929 181.011 146.037 181.072L152.714 184.958L184.511 162.369L181.529 155.25Z'
              fill='#FFE0D1'
            />
            <path
              d='M152.304 176.699C148.185 174.314 144.542 171.188 141.557 167.478L140.307 165.92L139.132 165.345L137.676 166.498L145.716 180.885C145.823 180.947 145.929 181.011 146.037 181.072L152.714 184.958L158.92 180.549C157.476 179.708 152.396 176.752 152.304 176.699V176.699Z'
              fill='#FFD1C2'
            />
            <path
              d='M252.419 121.669C252.412 120.776 251.443 120.225 250.672 120.674L214.444 141.798C213.659 142.24 212.72 142.328 211.865 142.038L206.717 140.287C200.147 138.056 193.002 138.188 186.517 140.662L186.391 140.712L176.406 153.709L153.36 174.624L150.994 176.718C149.237 178.351 148.657 180.849 149.413 182.987C149.641 183.637 149.992 184.251 150.473 184.802C152.25 186.831 155.111 187.297 157.386 186.143C156.478 187.212 156.018 188.538 156.018 189.867C156.018 191.264 156.525 192.667 157.553 193.773C159.79 196.007 163.511 196.075 165.824 193.923L165.892 193.861C164.955 194.936 164.483 196.28 164.483 197.63C164.483 199.029 164.993 200.432 166.02 201.536C168.255 203.773 171.976 203.84 174.289 201.685L174.526 201.468C173.622 202.534 173.165 203.855 173.165 205.181C173.165 206.581 173.674 207.98 174.702 209.087C176.936 211.321 180.658 211.388 182.971 209.236L185.29 207.184L201.131 195.499C200.849 195.049 200.684 194.518 200.684 193.947C200.684 192.327 201.997 191.013 203.618 191.013C204.504 191.013 205.297 191.408 205.835 192.029L210.237 188.782C210.095 188.399 210.013 187.986 210.013 187.553C210.013 185.6 211.597 184.016 213.55 184.016C214.361 184.016 215.106 184.292 215.702 184.751L221.758 180.284C225.802 178.515 229.289 175.678 231.843 172.076L233.397 169.886L252.062 160.767C252.464 160.571 252.717 160.162 252.714 159.715L252.419 121.669Z'
              fill='#FFE0D1'
            />
            <path
              d='M252.419 121.669C252.412 120.776 251.443 120.225 250.672 120.674L214.444 141.798C213.659 142.24 212.72 142.328 211.865 142.038L206.717 140.287C200.147 138.056 193.002 138.188 186.517 140.662L186.391 140.712L176.406 153.709L150.994 176.718C149.237 178.351 148.657 180.849 149.413 182.987C149.641 183.637 149.992 184.251 150.473 184.802C152.25 186.831 155.111 187.297 157.386 186.143C156.478 187.212 156.018 188.538 156.018 189.867C156.018 191.264 156.525 192.667 157.553 193.773C159.79 196.007 163.511 196.075 165.824 193.923L165.892 193.861C164.955 194.936 164.483 196.28 164.483 197.63C164.483 199.029 164.993 200.432 166.02 201.536C168.255 203.773 171.976 203.84 174.289 201.685L174.526 201.468C173.622 202.534 173.165 203.855 173.165 205.181C173.165 206.581 173.674 207.98 174.702 209.087C176.936 211.321 180.658 211.388 182.971 209.236L185.29 207.184L185.941 206.703V205.361C183.777 206.239 181.172 205.811 179.45 204.088C178.422 202.981 177.913 201.581 177.913 200.182C177.913 200.097 177.917 200.009 177.926 199.919C178.026 198.859 177.113 197.974 176.066 198.163C174.194 198.499 172.183 197.953 170.769 196.536C169.741 195.432 169.231 194.03 169.231 192.63C169.231 192.353 169.251 192.076 169.291 191.801C169.468 190.575 168.435 189.503 167.207 189.67C165.426 189.912 163.398 189.87 162.301 188.774C161.273 187.667 160.766 186.264 160.766 184.868C160.766 184.567 160.79 184.266 160.837 183.968C161.01 182.871 160.213 181.829 159.106 181.746C158.745 181.719 158.308 181.567 157.853 181.352C156.247 180.592 155.963 178.419 157.279 177.225L177.571 158.809L187.556 145.812L187.681 145.762C194.167 143.288 201.311 143.156 207.882 145.387L213.029 147.138C213.884 147.428 214.824 147.34 215.609 146.898L251.837 125.775C252.035 125.659 252.245 125.611 252.45 125.616L252.419 121.669Z'
              fill='#FFD1C2'
            />
            <path
              d='M204.662 157.17C204.662 154.455 203.61 151.894 201.699 149.958L191.18 139.306C189.599 139.629 188.041 140.081 186.517 140.662L186.391 140.712L176.406 153.709L170.4 159.16L180.048 159.583L188.463 165.547C190.208 166.783 192.259 167.436 194.397 167.436H194.397C196.683 167.436 198.932 166.66 200.734 165.248C203.23 163.287 204.662 160.343 204.662 157.17V157.17Z'
              fill='#FFD1C2'
            />
            <path
              d='M198.574 153.044L186.391 140.712C179.955 134.197 170.764 131.201 161.725 132.68L147.167 135.058L108.25 116.791C107.8 116.579 107.282 116.908 107.282 117.406V156.749C107.282 157.008 107.429 157.245 107.663 157.36L133.719 170.106L134.969 171.664C137.954 175.374 141.597 178.5 145.716 180.885L147.433 171.832L168.975 154.721L181.529 155.25L191.003 161.964C193.123 163.466 195.977 163.395 198.021 161.794C199.509 160.625 200.27 158.904 200.27 157.17C200.27 155.686 199.71 154.195 198.574 153.044Z'
              fill='#FFE0D1'
            />
            <path
              d='M141.557 167.478C140.734 166.452 139.695 165.62 138.513 165.042L115.681 153.873C114.573 153.331 113.87 152.204 113.87 150.971V119.428L108.25 116.791C107.8 116.579 107.282 116.908 107.282 117.406V156.749C107.282 157.008 107.429 157.245 107.663 157.36L133.719 170.106L134.969 171.664C137.954 175.374 141.597 178.5 145.716 180.885L147.182 173.152C145.121 171.464 143.235 169.563 141.557 167.478V167.478Z'
              fill='#FFD1C2'
            />
            <path
              d='M186.921 122.39L180.842 124.619C180.213 124.85 179.522 124.85 178.892 124.619L172.814 122.39C160.257 117.785 151.91 105.833 151.91 92.4589V73.372C151.91 71.8014 153.023 70.451 154.564 70.1505L180.005 65.196L205.176 70.1464C206.715 70.4492 207.825 71.7981 207.825 73.3667V92.4589C207.825 105.833 199.477 117.785 186.921 122.39V122.39Z'
              fill='#B3E5EE'
            />
            <path
              d='M184.353 122.009C169.323 117.024 159.331 104.082 159.331 89.6011V69.2221L154.564 70.1502C153.022 70.4504 151.909 71.8011 151.909 73.3717V92.4589C151.909 105.833 160.257 117.785 172.813 122.39L178.892 124.619C179.521 124.85 180.213 124.85 180.842 124.619L186.246 122.637L184.353 122.009Z'
              fill='#86D7E5'
            />
            <path
              d='M175.838 114.143C166.78 110.821 160.694 102.107 160.694 92.4589V79.5003C160.694 78.5742 161.35 77.7781 162.259 77.6009L179.996 74.1467L197.479 77.5851C198.386 77.7634 199.04 78.559 199.04 79.4836V92.4586C199.04 102.148 192.993 110.807 183.896 114.143L179.867 115.62L175.838 114.143Z'
              fill='#F9F7F7'
            />
            <path
              d='M221.758 180.284C223.172 179.666 224.515 178.914 225.777 178.048C225.375 176.875 224.748 175.758 223.886 174.766L220.048 170.349C218.162 168.179 215.431 166.935 212.554 166.935C210.164 166.935 207.853 167.799 206.046 169.369L205.731 169.643C204.186 170.985 203.158 172.704 202.663 174.545C200.716 174.787 198.874 175.601 197.378 176.901L197.062 177.176C195.551 178.489 194.495 180.187 193.989 182.079C192.044 182.322 190.204 183.135 188.711 184.433L188.394 184.708C186.849 186.05 185.821 187.769 185.326 189.61C183.379 189.852 181.537 190.666 180.041 191.967L179.725 192.241C177.724 193.98 176.52 196.394 176.334 199.038C176.149 201.683 177.005 204.241 178.744 206.242L181.984 209.971C182.333 209.764 182.665 209.521 182.971 209.236L185.29 207.183L201.131 195.499C200.849 195.048 200.684 194.518 200.684 193.947C200.684 192.327 201.997 191.013 203.618 191.013C204.504 191.013 205.297 191.408 205.835 192.029L210.237 188.782C210.095 188.398 210.013 187.986 210.013 187.552C210.013 185.599 211.597 184.016 213.55 184.016C214.361 184.016 215.106 184.292 215.702 184.751L221.758 180.284Z'
              fill='#FFD1C2'
            />
            <path
              d='M211.902 185.18L208.064 180.763C206.06 178.457 206.305 174.963 208.612 172.958L208.928 172.683C211.234 170.679 214.729 170.924 216.733 173.231L220.571 177.647C222.575 179.954 222.33 183.448 220.023 185.452L219.707 185.727C217.401 187.731 213.906 187.486 211.902 185.18V185.18Z'
              fill='#FFE0D1'
            />
            <path
              d='M214.296 183.379L210.458 178.962C208.641 176.871 208.682 173.8 210.423 171.752C209.894 171.974 209.385 172.286 208.928 172.683L208.612 172.958C206.305 174.963 206.06 178.457 208.064 180.763L211.902 185.18C213.906 187.486 217.401 187.731 219.707 185.727L220.023 185.452C220.238 185.265 220.43 185.072 220.609 184.862C218.467 185.759 215.903 185.228 214.296 183.379V183.379Z'
              fill='#FFD1C2'
            />
            <path
              d='M203.234 192.713L199.396 188.296C197.392 185.99 197.637 182.495 199.943 180.491L200.259 180.216C202.566 178.212 206.06 178.457 208.064 180.763L211.902 185.18C213.906 187.486 213.661 190.981 211.355 192.985L211.039 193.26C208.732 195.264 205.238 195.019 203.234 192.713Z'
              fill='#FFE0D1'
            />
            <path
              d='M205.701 190.569L201.863 186.152C200.182 184.218 200.085 181.442 201.456 179.416C201.033 179.623 200.631 179.892 200.259 180.216L199.943 180.491C197.636 182.495 197.391 185.99 199.396 188.296L203.233 192.713C205.238 195.019 208.732 195.264 211.038 193.26L211.355 192.985C211.727 192.661 212.042 192.304 212.306 191.914C210.11 192.989 207.381 192.503 205.701 190.569V190.569Z'
              fill='#FFD1C2'
            />
            <path
              d='M194.565 200.245L190.727 195.829C188.723 193.522 188.968 190.028 191.275 188.024L191.591 187.749C193.897 185.745 197.392 185.99 199.396 188.296L203.234 192.713C205.238 195.019 204.993 198.514 202.686 200.518L202.37 200.793C200.064 202.797 196.569 202.552 194.565 200.245Z'
              fill='#FFE0D1'
            />
            <path
              d='M196.915 198.204L193.077 193.787C191.378 191.832 191.292 189.022 192.711 186.991C192.314 187.192 191.942 187.444 191.591 187.749L191.274 188.024C188.968 190.028 188.723 193.522 190.727 195.829L194.565 200.245C196.569 202.552 200.063 202.797 202.37 200.793L202.686 200.518C203.037 200.212 203.339 199.875 203.594 199.51C201.386 200.632 198.614 200.159 196.915 198.204V198.204Z'
              fill='#FFD1C2'
            />
            <path
              d='M185.897 207.778L182.059 203.362C180.055 201.055 180.3 197.561 182.606 195.557L182.923 195.282C185.229 193.277 188.723 193.522 190.727 195.829L194.565 200.246C196.569 202.552 196.324 206.046 194.018 208.05L193.702 208.325C191.395 210.33 187.901 210.085 185.897 207.778Z'
              fill='#FFE0D1'
            />
            <path
              d='M190.164 207.468L184.29 200.709C182.859 199.062 182.581 196.811 183.375 194.928C183.22 195.037 183.069 195.155 182.922 195.282L182.606 195.557C180.3 197.561 180.054 201.055 182.059 203.362L185.896 207.778C187.596 209.734 190.368 210.207 192.577 209.084C191.675 208.78 190.834 208.239 190.164 207.468V207.468Z'
              fill='#FFD1C2'
            />
            <path
              d='M106.348 118.323L146.234 137.044C146.635 137.233 147.083 137.295 147.521 137.224L162.08 134.846C170.4 133.488 178.904 136.256 184.828 142.254L197.012 154.588C197.759 155.344 198.133 156.344 198.066 157.404C197.999 158.464 197.501 159.409 196.665 160.065C195.395 161.06 193.588 161.104 192.272 160.171L180.392 151.755C178.706 150.56 176.46 150.696 174.93 152.084L166.249 159.962C165.351 160.777 165.283 162.166 166.098 163.064C166.913 163.962 168.302 164.03 169.2 163.214L177.853 155.338L189.733 163.755C191.122 164.739 192.758 165.228 194.393 165.228C196.161 165.228 197.927 164.656 199.375 163.521C201.183 162.103 202.304 159.975 202.449 157.682C202.595 155.388 201.752 153.136 200.137 151.501L190.477 141.722C195.585 140.455 200.993 140.663 206.011 142.368L211.16 144.117C211.721 144.308 212.305 144.402 212.887 144.402C213.8 144.402 214.709 144.17 215.521 143.714C215.532 143.708 215.542 143.702 215.552 143.696L253.508 121.561C254.556 120.95 254.91 119.605 254.299 118.558C253.688 117.51 252.343 117.156 251.296 117.767L213.359 139.891C213.118 140.022 212.832 140.046 212.573 139.959L207.425 138.209C200.786 135.954 193.557 135.954 186.93 138.184C180.071 131.862 170.626 129.001 161.372 130.512L147.484 132.78L108.215 114.347C107.117 113.832 105.809 114.304 105.294 115.402C104.778 116.5 105.25 117.807 106.348 118.323V118.323Z'
              fill='black'
            />
            <path
              d='M254.692 159.483C254.16 158.393 252.844 157.942 251.755 158.474L232.433 167.912C232.103 168.073 231.818 168.315 231.606 168.615L230.051 170.806C228.182 173.442 225.762 175.627 222.971 177.219C222.754 176.868 222.508 176.528 222.228 176.207L218.39 171.79C215.595 168.574 210.704 168.231 207.487 171.026L207.171 171.301C205.536 172.722 204.645 174.684 204.53 176.693C204.496 176.69 204.462 176.685 204.429 176.683C202.37 176.539 200.377 177.205 198.819 178.559L198.502 178.834C196.867 180.255 195.976 182.219 195.861 184.229C193.855 184.062 191.786 184.67 190.151 186.091L189.834 186.367C188.198 187.788 187.307 189.752 187.193 191.762C185.186 191.595 183.117 192.203 181.482 193.625L181.166 193.899C179.607 195.254 178.67 197.133 178.525 199.193C178.381 201.252 179.047 203.244 180.401 204.802L182.256 206.937L181.516 207.591C181.502 207.604 181.488 207.616 181.475 207.628C180.045 208.958 177.676 208.924 176.282 207.561C175.086 206.247 175.049 204.245 176.2 202.888C176.952 202.002 176.883 200.682 176.043 199.879C175.202 199.076 173.881 199.067 173.03 199.859L172.794 200.079C171.364 201.409 168.995 201.375 167.6 200.012C166.388 198.679 166.362 196.662 167.546 195.303C168.313 194.422 168.256 193.095 167.417 192.282C166.578 191.471 165.249 191.458 164.394 192.253L164.328 192.314C162.898 193.644 160.529 193.611 159.134 192.247C157.936 190.93 157.9 188.926 159.057 187.569C159.735 186.772 159.758 185.608 159.111 184.786C158.464 183.964 157.327 183.713 156.394 184.185C154.948 184.917 153.193 184.575 152.125 183.355C150.882 181.935 151.04 179.691 152.473 178.341L154.834 176.249L162.201 169.565C163.099 168.75 163.167 167.361 162.352 166.463C161.536 165.564 160.148 165.497 159.25 166.312L151.903 172.979L149.539 175.073C149.526 175.085 149.512 175.097 149.499 175.109C148.288 176.235 147.497 177.661 147.135 179.171L147.119 179.162C143.093 176.88 139.581 173.894 136.681 170.287L135.429 168.73C135.227 168.479 134.972 168.275 134.682 168.134L108.247 155.201C107.157 154.669 105.842 155.12 105.309 156.209C104.776 157.298 105.227 158.614 106.316 159.147L132.313 171.864L133.258 173.039C136.508 177.08 140.442 180.426 144.954 182.983L147.689 184.533C147.983 185.142 148.358 185.72 148.82 186.247C150.155 187.773 151.971 188.684 153.878 188.906C153.606 191.158 154.3 193.498 155.946 195.268C155.964 195.287 155.982 195.306 156.001 195.325C157.698 197.022 160.012 197.809 162.279 197.67C162.29 199.596 163.003 201.518 164.411 203.032C164.43 203.051 164.448 203.07 164.466 203.089C166.221 204.843 168.633 205.624 170.972 205.418C171.028 207.281 171.738 209.125 173.092 210.581C173.11 210.6 173.129 210.62 173.147 210.638C174.718 212.209 176.817 212.999 178.917 212.999C180.907 212.999 182.899 212.29 184.444 210.863L185.228 210.17C186.447 211.155 187.935 211.746 189.532 211.858C189.716 211.871 189.9 211.877 190.084 211.877C191.945 211.877 193.723 211.215 195.141 209.982L195.458 209.707C197.094 208.285 197.985 206.321 198.099 204.311C198.314 204.329 198.53 204.341 198.746 204.341C200.544 204.341 202.35 203.718 203.81 202.449L204.126 202.175C205.763 200.753 206.653 198.789 206.768 196.779C206.983 196.797 207.198 196.808 207.414 196.808C209.212 196.808 211.018 196.186 212.479 194.917L212.795 194.642C214.353 193.288 215.291 191.408 215.435 189.349C215.438 189.314 215.438 189.28 215.44 189.246C215.654 189.264 215.868 189.275 216.083 189.275C217.881 189.275 219.687 188.653 221.147 187.384L221.464 187.109C223.132 185.659 224.025 183.645 224.11 181.594C227.894 179.653 231.165 176.827 233.634 173.346L234.865 171.612L253.682 162.419C254.772 161.888 255.224 160.573 254.692 159.483V159.483ZM192.578 206.393L192.261 206.668C191.589 207.252 190.731 207.54 189.84 207.478C188.951 207.415 188.139 207.01 187.555 206.338L183.717 201.922C183.132 201.249 182.845 200.389 182.907 199.5C182.969 198.611 183.374 197.799 184.047 197.214L184.363 196.94C184.994 196.392 185.773 196.123 186.549 196.123C187.483 196.123 188.411 196.512 189.07 197.27L192.908 201.686C194.114 203.075 193.966 205.186 192.578 206.393ZM201.246 198.86L200.93 199.135C199.541 200.342 197.43 200.194 196.223 198.805L192.385 194.388C191.178 193 191.326 190.888 192.714 189.682L193.031 189.407C194.42 188.2 196.531 188.348 197.738 189.737L201.576 194.153C202.783 195.542 202.635 197.653 201.246 198.86V198.86ZM211.054 189.042C210.992 189.931 210.587 190.743 209.914 191.328L209.598 191.602C208.209 192.809 206.098 192.661 204.891 191.272L201.053 186.856C199.846 185.467 199.995 183.355 201.383 182.149L201.7 181.874C202.312 181.342 203.08 181.056 203.883 181.056C203.962 181.056 204.042 181.058 204.122 181.064C205.011 181.126 205.822 181.531 206.407 182.204L210.244 186.62C210.829 187.293 211.117 188.153 211.054 189.042V189.042ZM218.583 183.794L218.267 184.069C216.878 185.276 214.767 185.128 213.56 183.739L209.722 179.323C209.137 178.65 208.85 177.79 208.912 176.901C208.974 176.012 209.379 175.201 210.052 174.616L210.368 174.341C211.757 173.135 213.868 173.282 215.075 174.671L218.913 179.088C220.12 180.476 219.972 182.588 218.583 183.794V183.794Z'
              fill='black'
            />
            <path
              d='M172.058 124.452L178.136 126.681C178.694 126.886 179.281 126.988 179.867 126.988C180.454 126.988 181.04 126.886 181.599 126.681L187.677 124.452C193.178 122.435 198.092 119.012 201.887 114.553C205.639 110.144 208.222 104.819 209.356 99.1524C209.594 97.963 208.824 96.8061 207.634 96.5681C206.444 96.3295 205.288 97.1013 205.05 98.2904C203.036 108.35 195.8 116.795 186.165 120.328L180.086 122.557C179.945 122.609 179.789 122.609 179.648 122.557L173.57 120.328C161.928 116.059 154.106 104.859 154.106 92.4586V73.372C154.106 72.8534 154.475 72.4051 154.984 72.3062L180.003 67.4336L204.752 72.3015C205.26 72.4013 205.629 72.8496 205.629 73.367V89.3613C205.629 90.5741 206.612 91.5574 207.825 91.5574C209.038 91.5574 210.021 90.5741 210.021 89.3613V73.3667C210.021 70.7561 208.161 68.4956 205.6 67.992L180.428 63.0413C180.15 62.9865 179.864 62.9862 179.585 63.0404L154.144 67.9949C151.577 68.495 149.714 70.7563 149.714 73.372V92.4592C149.714 106.694 158.693 119.551 172.058 124.452V124.452Z'
              fill='black'
            />
            <path
              d='M180.42 71.992C180.142 71.9369 179.855 71.9369 179.577 71.9911L160.274 75.7501C159.242 75.951 158.498 76.8546 158.498 77.9057V92.4589C158.498 103.024 165.163 112.567 175.082 116.205L179.111 117.682C179.355 117.772 179.611 117.817 179.867 117.817C180.123 117.817 180.379 117.772 180.623 117.682L184.652 116.205C194.572 112.567 201.237 103.024 201.237 92.4589V77.8922C201.237 76.8428 200.494 75.9401 199.464 75.7375L180.42 71.992ZM196.845 92.4589C196.845 101.19 191.337 109.075 183.14 112.081L179.867 113.282L176.594 112.082C168.397 109.075 162.89 101.19 162.89 92.4592V79.7155L179.994 76.3846L196.845 79.6985V92.4589Z'
              fill='black'
            />
            <motion.path
              d='M174.232 96.5283C173.348 95.6973 171.959 95.7403 171.128 96.6237C170.297 97.5074 170.34 98.897 171.223 99.728L174.768 103.061C175.176 103.445 175.715 103.657 176.272 103.657C176.318 103.657 176.365 103.656 176.412 103.653C177.018 103.614 177.581 103.326 177.968 102.857L189.449 88.9066C190.219 87.9702 190.085 86.5861 189.149 85.8155C188.212 85.0448 186.828 85.1792 186.058 86.1156L176.067 98.2543L174.232 96.5283Z'
              fill='whitesmoke'
              animate={{ fill: "green" }}
              transition={{ duration: 1, delay: 4.5 }}
            />
          </motion.g>
          <motion.line
            x1='0'
            y1='234.5'
            x2='0'
            y2='234.5'
            stroke='black'
            stroke-width='3'
            opacity={0}
            animate={{ x1: 105, x2: 255, opacity: 1 }}
            transition={{ duration: 1, delay: 3.4 }}
          />
          <motion.line
            x1='0'
            y1='268.5'
            x2='0'
            y2='268.5'
            stroke='black'
            stroke-width='3'
            opacity={0}
            animate={{ x1: 133, x2: 227, opacity: 1 }}
            transition={{ duration: 1, delay: 3.4 }}
          />
          <defs>
            <clipPath id='clip0'>
              <rect
                width='150'
                height='150'
                fill='white'
                transform='translate(105 63)'
              />
            </clipPath>
          </defs>
        </motion.svg>
      </div>
    </div>
  );
};

export default Logo;
