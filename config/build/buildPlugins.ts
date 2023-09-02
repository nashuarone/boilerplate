import { ProgressPlugin, WebpackPluginInstance } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { IBuildOptions } from './types/config';

export function buildPlugins({ paths }: IBuildOptions): WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
    ]
}