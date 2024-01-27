let pkgs = import <nixpkgs> {};

in pkgs.mkShell rec {
  name = "devenv";

  buildInputs = with pkgs; [
    nodejs_21
    pkgs.nodePackages_latest.pnpm
  ];
}
