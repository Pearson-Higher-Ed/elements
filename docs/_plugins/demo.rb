module Jekyll
  module Tags
    class DemoBlock < Liquid::Block
      include Liquid::StandardFilters

      def initialize(tag_name, markup, tokens)
        super
        @lang = 'html'
      end

      def render(context)
        code = "<div class=\"d-demo__live\">" + super.to_s.strip + "</div>"

        code_example = case context.registers[:site].highlighter
          when 'rouge'
            render_rouge(code)
          end

        demo(code + code_example)
      end

      def demo(output)
        "<div class=\"d-demo__container\">\n#{output}\n</div>"
      end

      def render_rouge(code)
        require 'rouge'
        formatter = Rouge::Formatters::HTML.new(line_numbers: false, wrap: false)
        lexer = Rouge::Lexer.find_fancy(@lang, code) || Rouge::Lexers::PlainText
        code = formatter.format(lexer.lex(code))
        "<div class=\"d-demo__code\"><pre>#{code}</pre></div>"
      end

    end
  end
end

Liquid::Template.register_tag('demo', Jekyll::Tags::DemoBlock)
